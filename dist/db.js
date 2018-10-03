"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const url = 'mongodb://localhost:27017';
const dbName = "yuni";
var SistemPengairan;
(function (SistemPengairan) {
    SistemPengairan[SistemPengairan["IRIGASI_TETES"] = 0] = "IRIGASI_TETES";
    SistemPengairan[SistemPengairan["SPRINKLER"] = 1] = "SPRINKLER";
    SistemPengairan[SistemPengairan["POMPA_AIR"] = 2] = "POMPA_AIR";
    SistemPengairan[SistemPengairan["IRIGASI_BAWAH_PERMUKAAN"] = 3] = "IRIGASI_BAWAH_PERMUKAAN";
    SistemPengairan[SistemPengairan["IRIGASI_PERMUKAAN"] = 4] = "IRIGASI_PERMUKAAN";
})(SistemPengairan = exports.SistemPengairan || (exports.SistemPengairan = {}));
var SumberMataAir;
(function (SumberMataAir) {
    SumberMataAir[SumberMataAir["TIDAK_ADA"] = 0] = "TIDAK_ADA";
    SumberMataAir[SumberMataAir["AGAK_BANYAK"] = 1] = "AGAK_BANYAK";
    SumberMataAir[SumberMataAir["CUKUP_BANYAK"] = 2] = "CUKUP_BANYAK";
    SumberMataAir[SumberMataAir["BANYAK"] = 3] = "BANYAK";
    SumberMataAir[SumberMataAir["SANGAT_BANYAK"] = 4] = "SANGAT_BANYAK";
})(SumberMataAir = exports.SumberMataAir || (exports.SumberMataAir = {}));
var KemiringanLahan;
(function (KemiringanLahan) {
    KemiringanLahan[KemiringanLahan["CURAM"] = 0] = "CURAM";
    KemiringanLahan[KemiringanLahan["BERBUKIT"] = 1] = "BERBUKIT";
    KemiringanLahan[KemiringanLahan["MELANDAI"] = 2] = "MELANDAI";
    KemiringanLahan[KemiringanLahan["AGAK_MELANDAI"] = 3] = "AGAK_MELANDAI";
    KemiringanLahan[KemiringanLahan["DATAR"] = 4] = "DATAR";
})(KemiringanLahan = exports.KemiringanLahan || (exports.KemiringanLahan = {}));
var TeksturTanah;
(function (TeksturTanah) {
    TeksturTanah[TeksturTanah["KASAR"] = 0] = "KASAR";
    TeksturTanah[TeksturTanah["AGAK_KASAR"] = 1] = "AGAK_KASAR";
    TeksturTanah[TeksturTanah["SEDANG"] = 2] = "SEDANG";
    TeksturTanah[TeksturTanah["AGAK_HALUS"] = 3] = "AGAK_HALUS";
    TeksturTanah[TeksturTanah["HALUS"] = 4] = "HALUS";
})(TeksturTanah = exports.TeksturTanah || (exports.TeksturTanah = {}));
var COrganik;
(function (COrganik) {
    COrganik[COrganik["TIDAK_TERSEDIA"] = 0] = "TIDAK_TERSEDIA";
    COrganik[COrganik["KURANG_TERSEDIA"] = 1] = "KURANG_TERSEDIA";
    COrganik[COrganik["CUKUP_TERSEDIA"] = 2] = "CUKUP_TERSEDIA";
    COrganik[COrganik["TERSEDIA"] = 3] = "TERSEDIA";
    COrganik[COrganik["SANGAT_TERSEDIA"] = 4] = "SANGAT_TERSEDIA";
})(COrganik = exports.COrganik || (exports.COrganik = {}));
var BahayaBencana;
(function (BahayaBencana) {
    BahayaBencana[BahayaBencana["SANGAT_BERAT"] = 0] = "SANGAT_BERAT";
    BahayaBencana[BahayaBencana["BERAT"] = 1] = "BERAT";
    BahayaBencana[BahayaBencana["SEDANG"] = 2] = "SEDANG";
    BahayaBencana[BahayaBencana["RINGAN"] = 3] = "RINGAN";
    BahayaBencana[BahayaBencana["TIDAK_ADA"] = 4] = "TIDAK_ADA";
})(BahayaBencana = exports.BahayaBencana || (exports.BahayaBencana = {}));
