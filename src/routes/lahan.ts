import { RouteBuilder, RouteEndPoint } from './base';
import { Lahan } from '../db';
import { toReadable } from '../converter';
import { Server } from '../server';
import { Request, Response } from 'express';

export const LahanInsertBuilder = (server: Server) => {
  return async (req: Request, resp: Response) => {
    let lahan!: Lahan;
    try {
      lahan = req.body;
      console.log(lahan);
      try {
        await server.repo.insert(lahan);
        resp.end('Ok');
      } catch(err) {
        console.log(err);
        resp.status(500).end('Fail to insert lahan');
      }
    } catch (err) {
      console.log(err);
      resp.status(500).end(`Invalid arguments: ${lahan}`);
    }
  }
};

export const LahanUpdateBuilder = (server: Server) => {
  return async (req: Request, resp: Response) => {
    let lahan!: Lahan;
    let lahanId: string = req.params.id;
    
    try {
      lahan = req.body;

      try {
        await server.repo.update(lahanId, lahan);
        resp.end('Ok');

      } catch(err) {
        console.log(err);
        resp.status(500).end('Fail update lahan');
      }

    } catch (err) {
      console.log(err);
      resp.status(500).end(`Invalid arguments: ${lahan}`);
    }
  }
};

export const LahanGetAllBuilder = (server: Server) => {
  return async (req: Request, resp: Response) => {
    try {
      let data = await server.repo.getAll();
      data = data.map(toReadable);
      resp.json(data);
    } catch (err) {
      console.log(`Fail to read data`);
      resp.status(500).end('error');
    }
  };
}