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
}

export class Repo {
  public collection!: mongodb.Collection;
  constructor(private config: ConConfig) {
    
  }

  async insert (lahan: Lahan) {
    return await this.collection.insertOne(lahan);
  }

  async update (id: string, lahan: Lahan) {
    return await this.collection.findOneAndUpdate({ _id: new mongodb.ObjectID(id) }, { $set: { ...lahan } });
  }

  async remove (id: string) {
    return await this.collection.remove({ _id: new mongodb.ObjectID(id) });
  }

  async getByIds (ids: [string]) {
    return await this.collection.find({ 
      "_id": {
        $in: ids.map(id => new mongodb.ObjectID(id))
      }
     }).toArray();
  }

  async getAll () {
    return await this.collection.find( {} ).toArray();
  }

  async connect() {
    this.collection = await collection(this.config.url, this.config.db, this.config.collection);
  }
}

function client() : (a: string) => mongodb.MongoClient {
  var client: mongodb.MongoClient;
  return (url: string) => {
    if (client == null) {
      client = new mongodb.MongoClient(url);
    }
    return client;
  };
}

async function collection(url: string, dbName: string, colName: string) {
  let cl = await client()(url).connect();
  return cl.db(dbName).collection(colName);
}

export const defaultConfig: ConConfig = {
  url,
  db: 'yuni',
  collection: 'lahan'
};

async function test() {
  const repo = new Repo(defaultConfig);
  await repo.connect();
  return repo.insert({
    lokasi: "tarus",
    lat: -10.179173, 
    long: 123.591715,
    curahHujan: 448,
    sistemPengairan: SistemPengairan.IRIGASI_PERMUKAAN,
    sumberAir: SumberMataAir.BANYAK,
    kemiringanLahan: KemiringanLahan.DATAR,
    teksturTanah: TeksturTanah.HALUS,
    corganik: COrganik.TERSEDIA,
    bahayaBencana: BahayaBencana.RINGAN,
    kedalamanTanah: 48
  }).catch(err => {
    console.log('FAIL');
    console.log(err);
  })
}