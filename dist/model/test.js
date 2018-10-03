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
const db_sql_1 = require("../db-sql");
const index_1 = require("./index");
const repo = new db_sql_1.SqlRepo();
repo.connect()
    .then(() => __awaiter(this, void 0, void 0, function* () {
    let data = yield repo.getAll();
    let result = index_1.f_saw(data);
    console.log(result);
}))
    .catch(err => {
    console.log(err);
});
