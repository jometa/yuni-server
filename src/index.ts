import { Server } from './server';
import { SqlRepo } from './db-sql';
import { LahanInsertBuilder, LahanUpdateBuilder,
        LahanGetAllBuilder, CompBuilder, LahanGetBydIdBuilder,
        LahanDelBuilder, FileUploadBuilder,
        LoadFilesBuilder } from './routes';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

const fileUpload = require('express-fileupload');
const config = require('../config');

const app = express.default();

app.use(bodyParser.json());
app.use(cors.default());
app.use(fileUpload());
app.use(express.static('public'));

const repo: SqlRepo = new SqlRepo();
const server: Server = new Server(app, repo);
const port: number = config.port;

server.get('/api/lahan', LahanGetAllBuilder);
server.get('/api/lahan/:id', LahanGetBydIdBuilder);
server.post('/api/lahan', LahanInsertBuilder);
server.put('/api/lahan/:id', LahanUpdateBuilder);
server.delete('/api/lahan/:id', LahanDelBuilder);
server.post('/comp', CompBuilder);
server.post('/media', FileUploadBuilder);
server.get('/lahan/:id/media', LoadFilesBuilder);
server.start(port)
  .then(server => {
    console.log(`Ok server run at ${port}`);
  })
  .catch(err => {
    console.log(`Boo!!! error happen`)
    console.log(err);
  });