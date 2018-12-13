import * as mongodb from 'mongodb';

const url = 'mongodb://localhost:27017';
const dbName = "yuni";

export interface ConConfig {
  url: string;
  db: string;
  collection: string;
}

export enum SistemPengairan {
  IRIGASI_TETES,
  SPRINKLER,
  POMPA_AIR,
  IRIGASI_BAWAH_PERMUKAAN,
  IRIGASI_PERMUKAAN
}

export enum SumberMataAir {
  TIDAK_ADA,
  AGAK_BANYAK,
  CUKUP_BANYAK,
  BANYAK,
  SANGAT_BANYAK
}

export enum KemiringanLahan {
  CURAM,
  BERBUKIT,
  MELANDAI,
  AGAK_MELANDAI,
  DATAR
}

export enum TeksturTanah {
  KASAR,
  AGAK_KASAR,
  SEDANG,
  AGAK_HALUS,
  HALUS
}

export enum COrganik {
  TIDAK_TERSEDIA,
  KURANG_TERSEDIA,
  CUKUP_TERSEDIA,
  TERSEDIA,
  SANGAT_TERSEDIA
}

export enum BahayaBencana {
  SANGAT_BERAT,
  BERAT,
  SEDANG,
  RINGAN,
  TIDAK_ADA
}

export interface Lahan {
  lokasi: string;
  lat: number;
  long: number;
  curahHujan: number;
  sistemPengairan: SistemPengairan;
  sumberAir: SumberMataAir;
  kemiringanLahan: KemiringanLahan;
  teksturTanah: TeksturTanah;
  kedalamanTanah: number;
  corganik: COrganik;
  bahayaBencana: BahayaBencana;
  urutan?: number;
}
