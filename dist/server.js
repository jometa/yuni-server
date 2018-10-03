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
class Server {
    constructor(app, repo) {
        this.app = app;
        this.repo = repo;
    }
    start(port) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.setUpRepo();
            }
            catch (err) {
                console.log(`Fail to set up mongo repository`);
                // How do we handle this???
                throw err;
            }
            return new Promise((resolve, reject) => {
                this.app.listen(port, (err) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(this);
                });
            });
        });
    }
    setUpRepo() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.repo.connect();
        });
    }
    registerRoute(rb) {
        return __awaiter(this, void 0, void 0, function* () {
            rb(this);
        });
    }
    post(path, rb) {
        return __awaiter(this, void 0, void 0, function* () { this.app.post(path, rb(this)); });
    }
    get(path, rb) {
        return __awaiter(this, void 0, void 0, function* () { this.app.get(path, rb(this)); });
    }
    put(path, rb) {
        return __awaiter(this, void 0, void 0, function* () { this.app.put(path, rb(this)); });
    }
    delete(path, rb) {
        return __awaiter(this, void 0, void 0, function* () { this.app.delete(path, rb(this)); });
    }
}
exports.Server = Server;
