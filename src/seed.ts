import { Server } from './server';
import { Repo, defaultConfig,
        SistemPengairan, SumberMataAir,
        KemiringanLahan, TeksturTanah, COrganik,
        BahayaBencana } from './db';

const repo: Repo = new Repo(defaultConfig);
repo.connect()
  .then(async () => {
    // Drop all DATA
    await repo.collection.deleteMany({});

    // Insert data here...
    await repo.insert({
      lokasi: 'Tarus',
      lat: -10.179173, 
      long: 123.591715,
      curahHujan: 448,
      sistemPengairan: SistemPengairan.IRIGASI_PERMUKAAN,
      sumberAir: SumberMataAir.AGAK_BANYAK,
      kemiringanLahan: KemiringanLahan.AGAK_MELANDAI,
      teksturTanah: TeksturTanah.SEDANG,
      kedalamanTanah: 46,
      corganik: COrganik.TERSEDIA,
      bahayaBencana: BahayaBencana.RINGAN
    });
    await repo.insert({
      lokasi: 'Noelbaki',
      lat: -10.179173, 
      long: 123.591715,
      curahHujan: 449,
      sistemPengairan: SistemPengairan.IRIGASI_PERMUKAAN,
      sumberAir: SumberMataAir.AGAK_BANYAK,
      kemiringanLahan: KemiringanLahan.AGAK_MELANDAI,
      teksturTanah: TeksturTanah.AGAK_HALUS,
      kedalamanTanah: 48,
      corganik: COrganik.CUKUP_TERSEDIA,
      bahayaBencana: BahayaBencana.RINGAN
    });
    await repo.insert({
      lokasi: 'Oebelo',
      lat: -10.179173, 
      long: 123.591715,
      curahHujan: 453,
      sistemPengairan: SistemPengairan.IRIGASI_PERMUKAAN,
      sumberAir: SumberMataAir.AGAK_BANYAK,
      kemiringanLahan: KemiringanLahan.DATAR,
      teksturTanah: TeksturTanah.AGAK_HALUS,
      kedalamanTanah: 50,
      corganik: COrganik.TERSEDIA,
      bahayaBencana: BahayaBencana.TIDAK_ADA
    });
    await repo.insert({
      lokasi: 'Manusak',
      lat: -10.179173, 
      long: 123.591715,
      curahHujan: 1043,
      sistemPengairan: SistemPengairan.IRIGASI_PERMUKAAN,
      sumberAir: SumberMataAir.BANYAK,
      kemiringanLahan: KemiringanLahan.DATAR,
      teksturTanah: TeksturTanah.HALUS,
      kedalamanTanah: 65,
      corganik: COrganik.SANGAT_TERSEDIA,
      bahayaBencana: BahayaBencana.TIDAK_ADA
    });
    await repo.insert({
      lokasi: 'Oesao',
      lat: -10.179173, 
      long: 123.591715,
      curahHujan: 1040,
      sistemPengairan: SistemPengairan.POMPA_AIR,
      sumberAir: SumberMataAir.SANGAT_BANYAK,
      kemiringanLahan: KemiringanLahan.DATAR,
      teksturTanah: TeksturTanah.HALUS,
      kedalamanTanah: 68,
      corganik: COrganik.SANGAT_TERSEDIA,
      bahayaBencana: BahayaBencana.RINGAN
    });
    await repo.insert({
      lokasi: 'Naibonat',
      lat: -10.179173, 
      long: 123.591715,
      curahHujan: 1045,
      sistemPengairan: SistemPengairan.POMPA_AIR,
      sumberAir: SumberMataAir.BANYAK,
      kemiringanLahan: KemiringanLahan.DATAR,
      teksturTanah: TeksturTanah.HALUS,
      kedalamanTanah: 65,
      corganik: COrganik.SANGAT_TERSEDIA,
      bahayaBencana: BahayaBencana.RINGAN
    });
    await repo.insert({
      lokasi: 'Raknamo',
      lat: -10.179173, 
      long: 123.591715,
      curahHujan: 485,
      sistemPengairan: SistemPengairan.IRIGASI_PERMUKAAN,
      sumberAir: SumberMataAir.AGAK_BANYAK,
      kemiringanLahan: KemiringanLahan.AGAK_MELANDAI,
      teksturTanah: TeksturTanah.AGAK_HALUS,
      kedalamanTanah: 45,
      corganik: COrganik.TERSEDIA,
      bahayaBencana: BahayaBencana.TIDAK_ADA
    });
    await repo.insert({
      lokasi: 'Sulamu',
      lat: -10.179173, 
      long: 123.591715,
      curahHujan: 420,
      sistemPengairan: SistemPengairan.IRIGASI_PERMUKAAN,
      sumberAir: SumberMataAir.AGAK_BANYAK,
      kemiringanLahan: KemiringanLahan.AGAK_MELANDAI,
      teksturTanah: TeksturTanah.HALUS,
      kedalamanTanah: 48,
      corganik: COrganik.SANGAT_TERSEDIA,
      bahayaBencana: BahayaBencana.TIDAK_ADA
    });
    await repo.insert({
      lokasi: 'Pariti',
      lat: -10.179173, 
      long: 123.591715,
      curahHujan: 425,
      sistemPengairan: SistemPengairan.POMPA_AIR,
      sumberAir: SumberMataAir.SANGAT_BANYAK,
      kemiringanLahan: KemiringanLahan.DATAR,
      teksturTanah: TeksturTanah.HALUS,
      kedalamanTanah: 50,
      corganik: COrganik.TERSEDIA,
      bahayaBencana: BahayaBencana.TIDAK_ADA
    });
    await repo.insert({
      lokasi: 'Nonbes',
      lat: -10.179173, 
      long: 123.591715,
      curahHujan: 783,
      sistemPengairan: SistemPengairan.POMPA_AIR,
      sumberAir: SumberMataAir.SANGAT_BANYAK,
      kemiringanLahan: KemiringanLahan.DATAR,
      teksturTanah: TeksturTanah.HALUS,
      kedalamanTanah: 65,
      corganik: COrganik.CUKUP_TERSEDIA,
      bahayaBencana: BahayaBencana.TIDAK_ADA
    });
    console.log('DONE SEEDING DATABASE');
    
  })
  .catch(err => {
    console.log(err);
    console.log('Fail to seed database');
  })