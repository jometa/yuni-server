"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../db");
function curahHujan(x) {
    if (x < 300 && x > 600) {
        return 0;
    }
    else if (x >= 300 && x <= 500) {
        return (x - 300) * 1.0 / (500 - 300);
    }
    else if (x >= 500 && x <= 1200) {
        return 1;
    }
    else
        return (1600 - x) * 1.0 / (1600 - 1200);
}
exports.curahHujan = curahHujan;
function _e(arr) {
    return arr.reduce((prev, current) => current + prev, 0) / arr.length;
}
function e(f) {
    return x => _e(f(x));
}
function _sistemPengairan(sp) {
    switch (sp) {
        case db_1.SistemPengairan.IRIGASI_TETES: return [0.0, 0.0, 0.25];
        case db_1.SistemPengairan.SPRINKLER: return [0, 0.25, 0.5];
        case db_1.SistemPengairan.POMPA_AIR: return [0.25, 0.5, 0.75];
        case db_1.SistemPengairan.IRIGASI_BAWAH_PERMUKAAN: return [0.50, 0.75, 1.0];
        case db_1.SistemPengairan.IRIGASI_PERMUKAAN: return [0.75, 1.0, 1.0];
    }
}
function _sumberMataAir(sm) {
    switch (sm) {
        case db_1.SumberMataAir.TIDAK_ADA: return [0.0, 0.0, 0.25];
        case db_1.SumberMataAir.AGAK_BANYAK: return [0, 0.25, 0.5];
        case db_1.SumberMataAir.CUKUP_BANYAK: return [0.25, 0.5, 0.75];
        case db_1.SumberMataAir.BANYAK: return [0.50, 0.75, 1.0];
        case db_1.SumberMataAir.SANGAT_BANYAK: return [0.75, 1.0, 1.0];
    }
}
function _kemiringanLahan(km) {
    switch (km) {
        case db_1.KemiringanLahan.CURAM: return [0.0, 0.0, 0.25];
        case db_1.KemiringanLahan.BERBUKIT: return [0, 0.25, 0.5];
        case db_1.KemiringanLahan.MELANDAI: return [0.25, 0.5, 0.75];
        case db_1.KemiringanLahan.AGAK_MELANDAI: return [0.50, 0.75, 1.0];
        case db_1.KemiringanLahan.DATAR: return [0.75, 1.0, 1.0];
    }
}
function _teksturTanah(tt) {
    switch (tt) {
        case db_1.TeksturTanah.KASAR: return [0.0, 0.0, 0.25];
        case db_1.TeksturTanah.AGAK_KASAR: return [0, 0.25, 0.5];
        case db_1.TeksturTanah.SEDANG: return [0.25, 0.5, 0.75];
        case db_1.TeksturTanah.AGAK_HALUS: return [0.50, 0.75, 1.0];
        case db_1.TeksturTanah.HALUS: return [0.75, 1.0, 1.0];
    }
}
function _corganik(co) {
    switch (co) {
        case db_1.COrganik.TIDAK_TERSEDIA: return [0.0, 0.0, 0.25];
        case db_1.COrganik.KURANG_TERSEDIA: return [0, 0.25, 0.5];
        case db_1.COrganik.CUKUP_TERSEDIA: return [0.25, 0.5, 0.75];
        case db_1.COrganik.TERSEDIA: return [0.50, 0.75, 1.0];
        case db_1.COrganik.SANGAT_TERSEDIA: return [0.75, 1.0, 1.0];
    }
}
function _bahayaBencana(co) {
    switch (co) {
        case db_1.BahayaBencana.SANGAT_BERAT: return [0.0, 0.0, 0.25];
        case db_1.BahayaBencana.BERAT: return [0, 0.25, 0.5];
        case db_1.BahayaBencana.SEDANG: return [0.25, 0.5, 0.75];
        case db_1.BahayaBencana.RINGAN: return [0.50, 0.75, 1.0];
        case db_1.BahayaBencana.TIDAK_ADA: return [0.75, 1.0, 1.0];
    }
}
function kedalamanTanah(kt) {
    if (kt <= 25)
        return 0;
    if (kt >= 25 && kt <= 60)
        return (kt - 25) * 1.0 / (60 - 25);
    if (kt >= 60)
        return 1;
}
exports.kedalamanTanah = kedalamanTanah;
exports.sistemPengairan = e(_sistemPengairan);
exports.sumberMataAir = e(_sumberMataAir);
exports.kemiringanLahan = e(_kemiringanLahan);
exports.teksturTanah = e(_teksturTanah);
exports.corganik = e(_corganik);
exports.bahayaBencana = e(_bahayaBencana);
