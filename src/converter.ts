import { SistemPengairan, SumberMataAir, KemiringanLahan,
        TeksturTanah, COrganik, BahayaBencana, Lahan  } from './db';

function _sistemPengairan(x: SistemPengairan) {
  switch (x) {
    case SistemPengairan.IRIGASI_BAWAH_PERMUKAAN:
      return "Irigasi Bawah Permukaan";
    case SistemPengairan.IRIGASI_PERMUKAAN:
      return "Irigasi Permukaan";
    case SistemPengairan.IRIGASI_TETES:
      return "Irigasi Tetes";
    case SistemPengairan.POMPA_AIR:
      return "Pompa Air";
    case SistemPengairan.SPRINKLER:
      return "Sprinkler";
    default:
      return "";
      break;
  }
}

function _sumberMataAir(x: SumberMataAir) {
  switch (x) {
    case SumberMataAir.AGAK_BANYAK:
      return "Agak Banyak";
    case SumberMataAir.BANYAK:
      return "Banyak";
    case SumberMataAir.CUKUP_BANYAK:
      return "Cukup Banyak";
    case SumberMataAir.SANGAT_BANYAK:
      return "Sangat Banyak";
    case SumberMataAir.TIDAK_ADA:
      return "Tidak Ada";
    default:
      return "";
  }
}

function _kemiringanLahan(x: KemiringanLahan) {
  switch (x) {
    case KemiringanLahan.AGAK_MELANDAI:
      return "Agak Melandai";
    case KemiringanLahan.BERBUKIT:
      return "Berbukit";
    case KemiringanLahan.CURAM:
      return "Curam";
    case KemiringanLahan.DATAR:
      return "Datar";
    case KemiringanLahan.MELANDAI:
      return "Melandai";
    default:
      return "";
  }
}

function _teksturTanah(x: TeksturTanah) {
  switch (x) {
    case TeksturTanah.AGAK_HALUS:
      return "Agak Halus";
    case TeksturTanah.AGAK_KASAR:
      return "Agak Kasar";
    case TeksturTanah.HALUS:
      return "Halus";
    case TeksturTanah.KASAR:
      return "Kasar";
    case TeksturTanah.SEDANG:
      return "Sedang";
    default:
      return "";
  }
}

function _corganik(x: COrganik) {
  switch (x) {
    case COrganik.CUKUP_TERSEDIA:
      return "Cukup Tersedia";
    case COrganik.KURANG_TERSEDIA:
      return "Kurang Tersedia";
    case COrganik.SANGAT_TERSEDIA:
      return "Sangat Tersedia";
    case COrganik.TERSEDIA:
      return "Tersedia";
    case COrganik.TIDAK_TERSEDIA:
      return "Tidak Tersedia";
    default:
      return "";
  }
}

function _bahayaBencana(x: BahayaBencana) {
  switch (x) {
    case BahayaBencana.BERAT:
      return "Berat";
    case BahayaBencana.RINGAN:
      return "Ringan";
    case BahayaBencana.SANGAT_BERAT:
      return "Sangat Berat";
    case BahayaBencana.SEDANG:
      return "Sedang";
    case BahayaBencana.TIDAK_ADA:
      return "Tidak Ada";
    default:
      return "";
  }
}

export function toReadable(lahan: Lahan) {
  let result = {
    lokasi: lahan.lokasi,
    lat: lahan.lat,
    long: lahan.long,
    curahHujan: lahan.curahHujan,

    sistemPengairan: _sistemPengairan(lahan.sistemPengairan),
    sumberAir: _sumberMataAir(lahan.sumberAir),
    kemiringanLahan: _kemiringanLahan(lahan.kemiringanLahan),
    teksturTanah: _teksturTanah(lahan.teksturTanah),
    corganik: _corganik(lahan.corganik),
    bahayaBencana: _bahayaBencana(lahan.bahayaBencana),

    kedalamanTanah: lahan.kedalamanTanah
  };
  if (lahan.hasOwnProperty("_id")) {
    let _id = (lahan as any)._id;
    return {
      ...result,
      _id
    };
  }
  return result;
  
}
