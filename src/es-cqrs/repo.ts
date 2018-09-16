import * as mongodb from 'mongodb';

const url = 'mongodb://localhost:27017';
const dbName = "yuni";

interface ConConfig {
  url: string;
  db: string;
  collection: string;
}

const defaultConfig: ConConfig = {
  url,
  db: 'yuni',
  collection: 'es'
};

function collection(url: string, dbName: string, colName: string) {
  let cl = await client()(url).connect();
  return cl.db(dbName).collection(colName);
}

export class Repo {
  public collection!: mongodb.Collection;
  constructor(private config: ConConfig) {
    
  }

  async insert (data) {
    return await this.collection.insertOne(data);
  }

  async getAllLimit(limit: number) {
    return await this.collection.find( {}, { limit } ).toArray();
  }

  async getAll () {
    return await this.collection.find( {} ).toArray();
  }

  async connect() {
    this.collection = await collection(this.config.url, this.config.db, this.config.collection);
  }
}