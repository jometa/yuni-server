import { Lahan } from './db';
import { SqlRepo } from './db-sql';
import { RouteBuilder } from './routes/base';
import * as express from 'express';
import * as bodyParser from 'body-parser';

export class Server {

  constructor(public app: express.Application, public repo: SqlRepo) {

  }

  async start(port: number): Promise<Server> {
    try {
      await this.setUpRepo()
    } catch (err) {
      console.log(`Fail to set up mongo repository`)
      // How do we handle this???
      throw err;
    }

    return new Promise<Server>((resolve, reject) => {
      this.app.listen(port, (err) => {
        if (err) {
          reject(err);
        }
        resolve(this);
      });
    });
  }

  async setUpRepo() {
    await this.repo.connect();
  }

  async registerRoute(rb: RouteBuilder) {
    rb(this);
  }

  async post(path: string, rb: RouteBuilder) { this.app.post(path, rb(this)); }
  async get(path: string, rb: RouteBuilder) { this.app.get(path, rb(this)); }
  async put(path: string, rb: RouteBuilder) { this.app.put(path, rb(this)); }
  async delete(path: string, rb: RouteBuilder) { this.app.delete(path, rb(this)); }
}
