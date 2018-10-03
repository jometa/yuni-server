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
const db_1 = require("../db");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const repo = new db_1.Repo(db_1.defaultConfig);
function _f() {
    return __awaiter(this, void 0, void 0, function* () {
        repo.connect();
        return repo;
    });
}
const repo$ = rxjs_1.from(_f()).pipe(operators_1.publish());
exports.repo$ = repo$;
repo$.connect();
