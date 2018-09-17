import { SistemPengairan, SumberMataAir,
        KemiringanLahan, TeksturTanah,
        COrganik, 
        BahayaBencana} from '../db';

export function curahHujan(x: number) {
  if (x < 300 && x > 600) { return 0; }
  else if (x >= 300 && x <= 500) { return (x - 300) * 1.0 / (500 - 300); }
  else if (x >= 500 && x <= 1200) { return 1; }
  else return (1600 - x) * 1.0 / (1600 - 1200);
}

type Base = (x: any) => number[];

function _e(arr: number[]): number {
  return arr.reduce((prev, current) => current + prev, 0) / arr.length;
}

function e(f: Base) {
  return x => _e(f(x));
}

function _sistemPengairan(sp: SistemPengairan) {
  switch (sp) {
    case SistemPengairan.IRIGASI_TETES: return [0.0, 0.0, 0.25];
    case SistemPengairan.SPRINKLER: return [0, 0.25, 0.5];
    case SistemPengairan.POMPA_AIR: return [0.25, 0.5, 0.75];
    case SistemPengairan.IRIGASI_BAWAH_PERMUKAAN: return [0.50, 0.75, 1.0];
    case SistemPengairan.IRIGASI_PERMUKAAN: return [0.75, 1.0, 1.0];
  }
}

function _sumberMataAir(sm: SumberMataAir) {
  switch (sm) {
    case SumberMataAir.TIDAK_ADA: return [0.0, 0.0, 0.25];
    case SumberMataAir.AGAK_BANYAK: return [0, 0.25, 0.5];
    case SumberMataAir.CUKUP_BANYAK: return [0.25, 0.5, 0.75];
    case SumberMataAir.BANYAK: return [0.50, 0.75, 1.0];
    case SumberMataAir.SANGAT_BANYAK: return [0.75, 1.0, 1.0];
  }
}

function _kemiringanLahan(km: KemiringanLahan) {
  switch (km) {
    case KemiringanLahan.CURAM: return [0.0, 0.0, 0.25];
    case KemiringanLahan.BERBUKIT: return [0, 0.25, 0.5];
    case KemiringanLahan.MELANDAI: return [0.25, 0.5, 0.75];
    case KemiringanLahan.AGAK_MELANDAI: return [0.50, 0.75, 1.0];
    case KemiringanLahan.DATAR: return [0.75, 1.0, 1.0];
  }
}

function _teksturTanah(tt: TeksturTanah) {
  switch (tt) {
    case TeksturTanah.KASAR: return [0.0, 0.0, 0.25];
    case TeksturTanah.AGAK_KASAR: return [0, 0.25, 0.5];
    case TeksturTanah.SEDANG: return [0.25, 0.5, 0.75];
    case TeksturTanah.AGAK_HALUS: return [0.50, 0.75, 1.0];
    case TeksturTanah.HALUS: return [0.75, 1.0, 1.0];
  }
}

function _corganik(co: COrganik) {
  switch (co) {
    case COrganik.TIDAK_TERSEDIA: return [0.0, 0.0, 0.25];
    case COrganik.KURANG_TERSEDIA: return [0, 0.25, 0.5];
    case COrganik.CUKUP_TERSEDIA: return [0.25, 0.5, 0.75];
    case COrganik.TERSEDIA: return [0.50, 0.75, 1.0];
    case COrganik.SANGAT_TERSEDIA: return [0.75, 1.0, 1.0];
  }
}

function _bahayaBencana(co: BahayaBencana) {
  switch (co) {
    case BahayaBencana.SANGAT_BERAT: return [0.0, 0.0, 0.25];
    case BahayaBencana.BERAT: return [0, 0.25, 0.5];
    case BahayaBencana.SEDANG: return [0.25, 0.5, 0.75];
    case BahayaBencana.RINGAN: return [0.50, 0.75, 1.0];
    case BahayaBencana.TIDAK_ADA: return [0.75, 1.0, 1.0];
  }
}

export function kedalamanTanah(kt: number) {
  if (kt <= 25) return 0;
  if (kt >= 25 && kt <= 60) return (kt - 25) * 1.0 / (60 - 25);
  if (kt >= 60) return 1;
}

export const sistemPengairan = e(_sistemPengairan);
export const sumberMataAir = e(_sumberMataAir);
export const kemiringanLahan = e(_kemiringanLahan);
export const teksturTanah = e(_teksturTanah);
export const corganik = e(_corganik);
export const bahayaBencana = e(_bahayaBencana);
