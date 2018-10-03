"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./db");
function _sistemPengairan(x) {
    switch (x) {
        case db_1.SistemPengairan.IRIGASI_BAWAH_PERMUKAAN:
            return "Irigasi Bawah Permukaan";
        case db_1.SistemPengairan.IRIGASI_PERMUKAAN:
            return "Irigasi Permukaan";
        case db_1.SistemPengairan.IRIGASI_TETES:
            return "Irigasi Tetes";
        case db_1.SistemPengairan.POMPA_AIR:
            return "Pompa Air";
        case db_1.SistemPengairan.SPRINKLER:
            return "Sprinkler";
        default:
            return "";
            break;
    }
}
function _sumberMataAir(x) {
    switch (x) {
        case db_1.SumberMataAir.AGAK_BANYAK:
            return "Agak Banyak";
        case db_1.SumberMataAir.BANYAK:
            return "Banyak";
        case db_1.SumberMataAir.CUKUP_BANYAK:
            return "Cukup Banyak";
        case db_1.SumberMataAir.SANGAT_BANYAK:
            return "Sangat Banyak";
        case db_1.SumberMataAir.TIDAK_ADA:
            return "Tidak Ada";
        default:
            return "";
    }
}
function _kemiringanLahan(x) {
    switch (x) {
        case db_1.KemiringanLahan.AGAK_MELANDAI:
            return "Agak Melandai";
        case db_1.KemiringanLahan.BERBUKIT:
            return "Berbukit";
        case db_1.KemiringanLahan.CURAM:
            return "Curam";
        case db_1.KemiringanLahan.DATAR:
            return "Datar";
        case db_1.KemiringanLahan.MELANDAI:
            return "Melandai";
        default:
            return "";
    }
}
function _teksturTanah(x) {
    switch (x) {
        case db_1.TeksturTanah.AGAK_HALUS:
            return "Agak Halus";
        case db_1.TeksturTanah.AGAK_KASAR:
            return "Agak Kasar";
        case db_1.TeksturTanah.HALUS:
            return "Halus";
        case db_1.TeksturTanah.KASAR:
            return "Kasar";
        case db_1.TeksturTanah.SEDANG:
            return "Sedang";
        default:
            return "";
    }
}
function _corganik(x) {
    switch (x) {
        case db_1.COrganik.CUKUP_TERSEDIA:
            return "Cukup Tersedia";
        case db_1.COrganik.KURANG_TERSEDIA:
            return "Kurang Tersedia";
        case db_1.COrganik.SANGAT_TERSEDIA:
            return "Sangat Tersedia";
        case db_1.COrganik.TERSEDIA:
            return "Tersedia";
        case db_1.COrganik.TIDAK_TERSEDIA:
            return "Tidak Tersedia";
        default:
            return "";
    }
}
function _bahayaBencana(x) {
    switch (x) {
        case db_1.BahayaBencana.BERAT:
            return "Berat";
        case db_1.BahayaBencana.RINGAN:
            return "Ringan";
        case db_1.BahayaBencana.SANGAT_BERAT:
            return "Sangat Berat";
        case db_1.BahayaBencana.SEDANG:
            return "Sedang";
        case db_1.BahayaBencana.TIDAK_ADA:
            return "Tidak Ada";
        default:
            return "";
    }
}
function toReadable(lahan) {
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
    if (lahan.hasOwnProperty("id")) {
        let _id = lahan.id;
        return Object.assign({}, result, { _id });
    }
    return result;
}
exports.toReadable = toReadable;
