import { Lahan} from '../db';
import { fromLahan } from './conversion';
import { getMatchRating } from './match-rating';

/** 
 * Utilities function
*/
function logRow(xs: number[]) {
  console.log( xs.map<String>(x => `${x.toFixed(4)}`).join('\t') );
}
function logMatrix(xs: number[][]) {
  xs.forEach(row => logRow(row));
}
function zip2(xs: number[], ys: number[]) {
  // console.log(ys);
  return xs.map((v, i) => {
    return [v, ys[i]]
  });
}

const MATCH_RATINGS = [
  [0.75, 1, 1], //Curah Hujan
  [0, 0.25, 0.5], // Sistem Pengairan
  [0.75, 1, 1], // Sumber Mata Air
  [0, 0.25, 0.5], // Kemiringan Lahan
  [0.5, 0.75, 1], // Tekstur Tanah
  [0.25, 0.5, 0.75],  // Kedalaman Tanah
  [0.5, 0.75, 1], // C-Organik
  [0.25, 0.5, 0.75] // Bahaya Bencana
];

interface WeightDesc {
  a: number;
  b: number;
  c: number;
  deffuzz: number;
  norm: number;
}

interface WeightNormStage1 {
  wds: Partial<WeightDesc>[];
  total: number;
}

const constructDeffuzz = (arr: number[]) : Partial<WeightDesc> => {
  let a = arr[0], b = arr[1], c = arr[2];
  return {
    a, b, c,
    deffuzz: (a + b + c) / 3.0
  }
};

const constructNorm = (acc: WeightNormStage1, curr: Partial<WeightDesc>) : WeightNormStage1 => {
  acc.wds.push(curr);
  acc.total += curr.deffuzz;
  return acc;
};

function constructNormWeights () {
  // Construct Weights
  const initial_stage: WeightNormStage1 = {
    wds: [],
    total: 0
  };

  let match_ratings = getMatchRating();
  let norm_weights = match_ratings
    .map(constructDeffuzz)
    .reduce<WeightNormStage1>(constructNorm, initial_stage);
  norm_weights.wds.map(wd => {
    wd.norm = wd.deffuzz / norm_weights.total;
  });

  return norm_weights;
}

// Dynamic part of model.
export function norm_matrix(ls: Lahan[]) {
  const names = ls.map(l => l.lokasi);
  const xs = ls.map(fromLahan);

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

function pref(xs: number[][], weights: number[]) {
  // console.log(weights.length);
  const prefs = xs.map(vs => { 
    // console.log(vs.length);
    return zip2(vs, weights)
      .map(arr => arr[0] * arr[1])
      .reduce((prev, next) => prev + next, 0);
    });
    
    return prefs;
}

export function f_saw(xs: Lahan[]) {
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
