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
const index_1 = require("../model/index");
const match_rating_1 = require("../model/match-rating");
exports.CompBuilder = (server) => {
    return (req, resp) => __awaiter(this, void 0, void 0, function* () {
        try {
            let data = yield server.repo.getAll();
            let result = index_1.f_saw(data);
            resp.json(result);
        }
        catch (err) {
            console.log(err);
            resp.status(500).end('Fail to run ranking');
        }
    });
};
exports.CriteriaRatingBuilder = (server) => {
    return (req, resp) => __awaiter(this, void 0, void 0, function* () {
        try {
            resp.json(match_rating_1.getMatchRatingItems());
        }
        catch (err) {
            console.log(err);
            resp.status(500).end('Fail to run ranking');
        }
    });
};
exports.CriteriaRatingOptionBuilder = (server) => {
    return (req, resp) => __awaiter(this, void 0, void 0, function* () {
        try {
            resp.json(match_rating_1.RatingRule.map(arr => {
                return {
                    ling: arr[0],
                    value: arr[1]
                };
            }));
        }
        catch (err) {
            console.log(err);
            resp.status(500).end('Fail to run ranking');
        }
    });
};
