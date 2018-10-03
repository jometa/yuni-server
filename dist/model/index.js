"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conversion_1 = require("./conversion");
const match_rating_1 = require("./match-rating");
/**
 * Utilities function
*/
function logRow(xs) {
    console.log(xs.map(x => `${x.toFixed(4)}`).join('\t'));
}
function logMatrix(xs) {
    xs.forEach(row => logRow(row));
}
function zip2(xs, ys) {
    // console.log(ys);
    return xs.map((v, i) => {
        return [v, ys[i]];
    });
}
const MATCH_RATINGS = [
    [0.75, 1, 1],
    [0, 0.25, 0.5],
    [0.75, 1, 1],
    [0, 0.25, 0.5],
    [0.5, 0.75, 1],
    [0.25, 0.5, 0.75],
    [0.5, 0.75, 1],
    [0.25, 0.5, 0.75] // Bahaya Bencana
];
const constructDeffuzz = (arr) => {
    let a = arr[0], b = arr[1], c = arr[2];
    return {
        a, b, c,
        deffuzz: (a + b + c) / 3.0
    };
};
const constructNorm = (acc, curr) => {
    acc.wds.push(curr);
    acc.total += curr.deffuzz;
    return acc;
};
function constructNormWeights() {
    // Construct Weights
    const initial_stage = {
        wds: [],
        total: 0
    };
    let match_ratings = match_rating_1.getMatchRating();
    let norm_weights = match_ratings
        .map(constructDeffuzz)
        .reduce(constructNorm, initial_stage);
    norm_weights.wds.map(wd => {
        wd.norm = wd.deffuzz / norm_weights.total;
    });
    return norm_weights;
}
// Dynamic part of model.
function norm_matrix(ls) {
    const names = ls.map(l => l.lokasi);
    const xs = ls.map(conversion_1.fromLahan);
    // max of each column
    const max_cols = [];
    for (let i = 0; i < xs[0].length; i++) {
        let max = 0;
        for (let j = 0; j < xs.length; j++) {
            if (xs[j][i] > max) {
                max = xs[j][i];
            }
        }
        max_cols.push(max);
    }
    // Normalize by column
    for (let i = 0; i < xs[0].length; i++) {
        for (let j = 0; j < xs.length; j++) {
            xs[j][i] = xs[j][i] / max_cols[i];
        }
    }
    return xs;
}
exports.norm_matrix = norm_matrix;
function pref(xs, weights) {
    // console.log(weights.length);
    const prefs = xs.map(vs => {
        // console.log(vs.length);
        return zip2(vs, weights)
            .map(arr => arr[0] * arr[1])
            .reduce((prev, next) => prev + next, 0);
    });
    return prefs;
}
function f_saw(xs) {
    const norm_weights = constructNormWeights();
    const weights = norm_weights.wds.map(wd => wd.norm);
    const mat = norm_matrix(xs);
    const prefs = pref(mat, weights);
    let result = [];
    for (let i = 0; i < xs.length; i++) {
        result.push({
            lahan: xs[i],
            pref: prefs[i]
        });
    }
    return result;
}
exports.f_saw = f_saw;
