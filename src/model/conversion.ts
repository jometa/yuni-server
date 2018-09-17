import { Lahan} from '../db';
import {
  curahHujan,
  sistemPengairan,
  sumberMataAir,
  kemiringanLahan,
  teksturTanah,
  kedalamanTanah,
  corganik,
  bahayaBencana
} from './memberships';

export function fromLahan(lahan: Lahan): number[] {
  return [
    curahHujan(lahan.curahHujan),
    sistemPengairan(lahan.sistemPengairan),
    sumberMataAir(lahan.sumberAir),
    kemiringanLahan(lahan.kemiringanLahan),
    teksturTanah(lahan.teksturTanah),
    kedalamanTanah(lahan.kedalamanTanah),
    corganik(lahan.corganik),
    bahayaBencana(lahan.bahayaBencana)
  ];
}
