import { writeFile, readFileSync } from 'fs';
// const fs = requie('fs');

export interface IRating {
  curahHujan: string;
  sistemPengairan: string;
  sumberAir: string;
  kemiringanLahan: string;
  teksturTanah: string;
  kedalamanTanah: string;
  corganik: string;
  bahayaBencana: string;
}

export const Rating = [
  "Sangat Rendah",
  "Rendah",
  "Cukup Tinggi",
  "Tinggi",
  "Sangat Tinggi"
];

export const RatingRule = [
  [ Rating[0], [0, 0, 0.25] ],
  [ Rating[1], [0, 0.25, 0.5] ],
  [ Rating[2], [0.25, 0.5, 0.75] ],
  [ Rating[3], [0.5, 0.75, 1] ],
  [ Rating[4], [0.75, 1, 1] ]
]

export function getValue (r: string) {
  for (let i = 0; i < RatingRule.length; i++) {
    if (RatingRule[i][0] === r) return RatingRule[i][1];
  }
  throw new Error('Unknown rating value');
}

export function getMatchRating () {
  // const defMatchRating = require('./db-match-rating.json');
  const x = readFileSync('./db-match-rating.json')
  const defMatchRating = JSON.parse(x.toString())
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

export function writeRatings (x: IRating, cb : any) {
  writeFile('./db-match-rating.json', JSON.stringify(x), cb);
}

export function getMatchRatingItems () {
  const x = readFileSync('./db-match-rating.json')
  const defMatchRating = JSON.parse(x.toString())
  let result = [];
  Object.keys(defMatchRating).forEach(k => {
    let x = defMatchRating[`${k}`];
    result.push({ name: k, ling: x, value: getValue(x) });
  });
  return result;
};
