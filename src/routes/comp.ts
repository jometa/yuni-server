import { RouteBuilder, RouteEndPoint } from './base';
import { Lahan } from '../db';
import { Server } from '../server';
import { Request, Response } from 'express';
import { f_saw } from '../model/index';

export const CompBuilder = (server: Server) => {
  return async (req: Request, resp: Response) => {
    try {
      let data = await server.repo.getAll();
      let result = f_saw(data);

      resp.json(result);
    } catch (err) {
      console.log(err);
      resp.status(500).end('Fail to run ranking');
    }
  }
};