"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const base_1 = require("./base");
const db_1 = require("../db");
const example = {
    lokasi: 'Ende',
    lat: -10.179173,
    long: 123.591715,
    curahHujan: 448,
    sistemPengairan: db_1.SistemPengairan.IRIGASI_PERMUKAAN,
    sumberAir: db_1.SumberMataAir.AGAK_BANYAK,
    kemiringanLahan: db_1.KemiringanLahan.AGAK_MELANDAI,
    teksturTanah: db_1.TeksturTanah.SEDANG,
    kedalamanTanah: 46,
    corganik: db_1.COrganik.TERSEDIA,
    bahayaBencana: db_1.BahayaBencana.RINGAN
};
index_1.SystemUp.subscribe(h => {
    index_1.push(new base_1.CmdNewLahan(example));
});
index_1.connectEsCqrs();
