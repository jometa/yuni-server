"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const db_sql_1 = require("./db-sql");
const routes_1 = require("./routes");
const express = __importStar(require("express"));
const bodyParser = __importStar(require("body-parser"));
const cors = __importStar(require("cors"));
const fileUpload = require('express-fileupload');
const config = require('../config');
const app = express.default();
app.use(bodyParser.json());
app.use(cors.default());
app.use(fileUpload());
app.use(express.static('public'));
const repo = new db_sql_1.SqlRepo();
const server = new server_1.Server(app, repo);
const port = config.port;
server.get('/api/lahan', routes_1.LahanGetAllBuilder);
server.get('/api/lahan/:id', routes_1.LahanGetBydIdBuilder);
server.post('/api/lahan', routes_1.LahanInsertBuilder);
server.put('/api/lahan/:id', routes_1.LahanUpdateBuilder);
server.delete('/api/lahan/:id', routes_1.LahanDelBuilder);
server.post('/comp', routes_1.CompBuilder);
server.post('/media', routes_1.FileUploadBuilder);
server.get('/lahan/:id/media', routes_1.LoadFilesBuilder);
server.get('/criteria_rating', routes_1.CriteriaRatingBuilder);
server.get('/criteria_rating_options', routes_1.CriteriaRatingOptionBuilder);
server.start(port)
    .then(server => {
    console.log(`Ok server run at ${port}`);
})
    .catch(err => {
    console.log(`Boo!!! error happen`);
    console.log(err);
});
