import { Repo, defaultConfig, Lahan } from '../db';
import { Observable, ConnectableObservable, from } from 'rxjs';
import * as mongodb from 'mongodb';
import { publish } from 'rxjs/operators';

interface ILogRepo {
  insert (t: any): Promise<void>;
  select (limit: number): Promise<any[]>;
}

export class LogRepo implements ILogRepo {
  constructor (private collection: mongodb.Collection) {}
  async insert (t: any) {
    
  }

  async select(limit: number) {
    return await this.collection.find({}, { limit }).toArray();
  }
}

const repo = new Repo(defaultConfig);
async function _f() {
  await repo.connect();
  return repo;
}
const repo$ = from(_f()).pipe( publish() ) as ConnectableObservable<Repo>;
repo$.connect();

export { repo$ };