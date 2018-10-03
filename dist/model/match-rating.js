"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rating = [
    "Sangat Rendah",
    "Rendah",
    "Cukup Tinggi",
    "Tinggi",
    "Sangat Tinggi"
];
exports.RatingRule = [
    [exports.Rating[0], [0, 0, 0.25]],
    [exports.Rating[1], [0, 0.25, 0.5]],
    [exports.Rating[2], [0.25, 0.5, 0.75]],
    [exports.Rating[3], [0.5, 0.75, 1]],
    [exports.Rating[4], [0.75, 1, 1]]
];
function getValue(r) {
    for (let i = 0; i < exports.RatingRule.length; i++) {
        if (exports.RatingRule[i][0] === r)
            return exports.RatingRule[i][1];
    }
    throw new Error('Unknown rating value');
}
exports.getValue = getValue;
function getMatchRating() {
    const defMatchRating = require('./db-match-rating.json');
    return [
        getValue(defMatchRating.curahHujan),
        getValue(defMatchRating.sistemPengairan),
        getValue(defMatchRating.sumberAir),
        getValue(defMatchRating.kemiringanLahan),
        getValue(defMatchRating.teksturTanah),
        getValue(defMatchRating.kedalamanTanah),
        getValue(defMatchRating.corganik),
        getValue(defMatchRating.bahayaBencana)
    ];
}
exports.getMatchRating = getMatchRating;
function writeRatings(x) {
    // writeFile()
}
exports.writeRatings = writeRatings;
function getMatchRatingItems() {
    const defMatchRating = require('./db-match-rating.json');
    let result = [];
    Object.keys(defMatchRating).forEach(k => {
        let x = defMatchRating[`${k}`];
        result.push({ name: k, ling: x, value: getValue(x) });
    });
    return result;
}
exports.getMatchRatingItems = getMatchRatingItems;
;
