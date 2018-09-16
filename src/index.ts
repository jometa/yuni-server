import { Server } from './server';
import { Repo, defaultConfig } from './db';
import { LahanInsertBuilder, LahanUpdateBuilder,
        LahanGetAllBuilder } from './routes/lahan';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

const app = express.default();

app.use(bodyParser.json());
app.use(cors.default());

const repo: Repo = new Repo(defaultConfig);
const server: Server = new Server(app, repo);
const port: number = 3000;

server.get('/api/lahan', LahanGetAllBuilder);
server.post('/api/lahan', LahanInsertBuilder);
server.put('/api/lahan/:id', LahanUpdateBuilder);
server.start(port)
  .then(server => {
    console.log(`Ok server run at ${port}`);
  })
  .catch(err => {
    console.log(`Boo!!! error happen`)
    console.log(err);
  });