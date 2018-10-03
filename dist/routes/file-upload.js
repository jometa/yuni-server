"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function make_rand_name(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}
exports.FileUploadBuilder = (server) => {
    return (req, resp) => __awaiter(this, void 0, void 0, function* () {
        let _req = req;
        let lid = req.body.id;
        if (!lid) {
            console.log('lahan id is invalid');
            resp.status(500).end('error');
            return;
        }
        try {
            let file = _req.files.image;
            if (file.truncated) {
                throw new Error('File is truncated, can\'t save it.');
            }
            let ext = file.name.split('.')[1];
            let new_name = `${make_rand_name(20)}.${ext}`;
            file.mv(`public/medias/${new_name}`, err => {
                if (err) {
                    console.log(err);
                    resp.status(500).end('Fail to move file');
                }
                else {
                    server.repo.addMedia(lid, new_name, false)
                        .then(() => {
                        resp.end('ok');
                    })
                        .catch(err => {
                        console.log(err);
                        resp.status(500).end('Something wrong');
                    });
                }
            });
        }
        catch (err) {
            console.log(err);
            resp.status(500).end('Something wrong');
        }
    });
};
exports.LoadFilesBuilder = (server) => {
    return (req, resp) => __awaiter(this, void 0, void 0, function* () {
        try {
            let id = req.params.id;
            let result = yield server.repo.getMedias(id);
            resp.json(result);
        }
        catch (err) {
            console.log(err);
            resp.status(500).end('error');
        }
    });
};
