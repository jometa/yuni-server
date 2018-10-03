"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./db");
const db_sql_1 = require("./db-sql");
const repo = new db_sql_1.SqlRepo();
repo.connect()
    .then(() => __awaiter(this, void 0, void 0, function* () {
    // Drop all DATA
    yield repo.connection.manager.clear(db_sql_1.TableLahan);
    // Insert data here...
    yield repo.insert({
        lokasi: 'Tarus',
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
    });
    yield repo.insert({
        lokasi: 'Noelbaki',
        lat: -10.179173,
        long: 123.591715,
        curahHujan: 449,
        sistemPengairan: db_1.SistemPengairan.IRIGASI_PERMUKAAN,
        sumberAir: db_1.SumberMataAir.AGAK_BANYAK,
        kemiringanLahan: db_1.KemiringanLahan.AGAK_MELANDAI,
        teksturTanah: db_1.TeksturTanah.AGAK_HALUS,
        kedalamanTanah: 48,
        corganik: db_1.COrganik.CUKUP_TERSEDIA,
        bahayaBencana: db_1.BahayaBencana.RINGAN
    });
    yield repo.insert({
        lokasi: 'Oebelo',
        lat: -10.179173,
        long: 123.591715,
        curahHujan: 453,
        sistemPengairan: db_1.SistemPengairan.IRIGASI_PERMUKAAN,
        sumberAir: db_1.SumberMataAir.AGAK_BANYAK,
        kemiringanLahan: db_1.KemiringanLahan.DATAR,
        teksturTanah: db_1.TeksturTanah.AGAK_HALUS,
        kedalamanTanah: 50,
        corganik: db_1.COrganik.TERSEDIA,
        bahayaBencana: db_1.BahayaBencana.TIDAK_ADA
    });
    yield repo.insert({
        lokasi: 'Manusak',
        lat: -10.179173,
        long: 123.591715,
        curahHujan: 1043,
        sistemPengairan: db_1.SistemPengairan.IRIGASI_PERMUKAAN,
        sumberAir: db_1.SumberMataAir.BANYAK,
        kemiringanLahan: db_1.KemiringanLahan.DATAR,
        teksturTanah: db_1.TeksturTanah.HALUS,
        kedalamanTanah: 65,
        corganik: db_1.COrganik.SANGAT_TERSEDIA,
        bahayaBencana: db_1.BahayaBencana.TIDAK_ADA
    });
    yield repo.insert({
        lokasi: 'Oesao',
        lat: -10.179173,
        long: 123.591715,
        curahHujan: 1040,
        sistemPengairan: db_1.SistemPengairan.POMPA_AIR,
        sumberAir: db_1.SumberMataAir.SANGAT_BANYAK,
        kemiringanLahan: db_1.KemiringanLahan.DATAR,
        teksturTanah: db_1.TeksturTanah.HALUS,
        kedalamanTanah: 68,
        corganik: db_1.COrganik.SANGAT_TERSEDIA,
        bahayaBencana: db_1.BahayaBencana.RINGAN
    });
    yield repo.insert({
        lokasi: 'Naibonat',
        lat: -10.179173,
        long: 123.591715,
        curahHujan: 1045,
        sistemPengairan: db_1.SistemPengairan.POMPA_AIR,
        sumberAir: db_1.SumberMataAir.BANYAK,
        kemiringanLahan: db_1.KemiringanLahan.DATAR,
        teksturTanah: db_1.TeksturTanah.HALUS,
        kedalamanTanah: 65,
        corganik: db_1.COrganik.SANGAT_TERSEDIA,
        bahayaBencana: db_1.BahayaBencana.RINGAN
    });
    yield repo.insert({
        lokasi: 'Raknamo',
        lat: -10.179173,
        long: 123.591715,
        curahHujan: 485,
        sistemPengairan: db_1.SistemPengairan.IRIGASI_PERMUKAAN,
        sumberAir: db_1.SumberMataAir.AGAK_BANYAK,
        kemiringanLahan: db_1.KemiringanLahan.AGAK_MELANDAI,
        teksturTanah: db_1.TeksturTanah.AGAK_HALUS,
        kedalamanTanah: 45,
        corganik: db_1.COrganik.TERSEDIA,
        bahayaBencana: db_1.BahayaBencana.TIDAK_ADA
    });
    yield repo.insert({
        lokasi: 'Sulamu',
        lat: -10.179173,
        long: 123.591715,
        curahHujan: 420,
        sistemPengairan: db_1.SistemPengairan.IRIGASI_PERMUKAAN,
        sumberAir: db_1.SumberMataAir.AGAK_BANYAK,
        kemiringanLahan: db_1.KemiringanLahan.AGAK_MELANDAI,
        teksturTanah: db_1.TeksturTanah.HALUS,
        kedalamanTanah: 48,
        corganik: db_1.COrganik.SANGAT_TERSEDIA,
        bahayaBencana: db_1.BahayaBencana.TIDAK_ADA
    });
    yield repo.insert({
        lokasi: 'Pariti',
        lat: -10.179173,
        long: 123.591715,
        curahHujan: 425,
        sistemPengairan: db_1.SistemPengairan.POMPA_AIR,
        sumberAir: db_1.SumberMataAir.SANGAT_BANYAK,
        kemiringanLahan: db_1.KemiringanLahan.DATAR,
        teksturTanah: db_1.TeksturTanah.HALUS,
        kedalamanTanah: 50,
        corganik: db_1.COrganik.TERSEDIA,
        bahayaBencana: db_1.BahayaBencana.TIDAK_ADA
    });
    yield repo.insert({
        lokasi: 'Nonbes',
        lat: -10.179173,
        long: 123.591715,
        curahHujan: 783,
        sistemPengairan: db_1.SistemPengairan.POMPA_AIR,
        sumberAir: db_1.SumberMataAir.SANGAT_BANYAK,
        kemiringanLahan: db_1.KemiringanLahan.DATAR,
        teksturTanah: db_1.TeksturTanah.HALUS,
        kedalamanTanah: 65,
        corganik: db_1.COrganik.CUKUP_TERSEDIA,
        bahayaBencana: db_1.BahayaBencana.TIDAK_ADA
    });
    console.log('DONE SEEDING DATABASE');
}))
    .catch(err => {
    console.log(err);
    console.log('Fail to seed database');
});
