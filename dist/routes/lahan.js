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
const converter_1 = require("../converter");
exports.LahanInsertBuilder = (server) => {
    return (req, resp) => __awaiter(this, void 0, void 0, function* () {
        let lahan;
        try {
            lahan = req.body;
            console.log(lahan);
            try {
                yield server.repo.insert(lahan);
                resp.end('Ok');
            }
            catch (err) {
                console.log(err);
                resp.status(500).end('Fail to insert lahan');
            }
        }
        catch (err) {
            console.log(err);
            resp.status(500).end(`Invalid arguments: ${lahan}`);
        }
    });
};
exports.LahanUpdateBuilder = (server) => {
    return (req, resp) => __awaiter(this, void 0, void 0, function* () {
        let lahan;
        let lahanId = req.params.id;
        try {
            lahan = req.body;
            try {
                yield server.repo.update(lahanId, lahan);
                resp.end('Ok');
            }
            catch (err) {
                console.log(err);
                resp.status(500).end('Fail update lahan');
            }
        }
        catch (err) {
            console.log(err);
            resp.status(500).end(`Invalid arguments: ${lahan}`);
        }
    });
};
exports.LahanGetAllBuilder = (server) => {
    return (req, resp) => __awaiter(this, void 0, void 0, function* () {
        try {
            let data = yield server.repo.getAll();
            let rdata = data.map(l => converter_1.toReadable(l));
            resp.json(rdata);
        }
        catch (err) {
            console.log(`Fail to read data`);
            resp.status(500).end('error');
        }
    });
};
exports.LahanGetBydIdBuilder = (server) => {
    return (req, resp) => __awaiter(this, void 0, void 0, function* () {
        try {
            let id = req.params.id;
            let data = yield server.repo.getById(id);
            resp.json(data);
        }
        catch (err) {
            console.log(err);
            console.log(`Fail to read data`);
            resp.status(500).end('error');
        }
    });
};
exports.LahanDelBuilder = (server) => {
    return (req, resp) => __awaiter(this, void 0, void 0, function* () {
        try {
            let id = req.params.id;
            let data = yield server.repo.remove(id);
            resp.json(data);
        }
        catch (err) {
            console.log(err);
            console.log(`Fail to delete data`);
            resp.status(500).end('error');
        }
    });
};
