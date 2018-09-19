export function getMatchRating () {
  const defMatchRating = require('./db-match-rating.json');
  return [
    defMatchRating.curahHujan,
    defMatchRating.sistemPengairan,
    defMatchRating.sumberAir,
    defMatchRating.kemiringanLahan,
    defMatchRating.teksturTanah,
    defMatchRating.kedalamanTanah,
    defMatchRating.corganik,
    defMatchRating.bahayaBencana
  ];
}