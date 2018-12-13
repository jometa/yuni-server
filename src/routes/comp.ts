import { RouteBuilder, RouteEndPoint } from './base';
import { Lahan } from '../db';
import { Server } from '../server';
import { Request, Response } from 'express';
import { f_saw } from '../model/index';
import { SqlRepo } from '../db-sql';
import { getMatchRatingItems, RatingRule, writeRatings, IRating } from '../model/match-rating';

export const CompBuilder = (server: Server) => {
  return async (req: Request, resp: Response) => {
    try {
      let data = await server.repo.getAll();
      let result = f_saw(data);

      let urutan = result.map(it => {
        return {
          id: it.lahan.id,
          pref: it.pref
        }
      });
      urutan = urutan.sort((a, b) => a.pref - b.pref);
      urutan.forEach(async (it, index) => {
        await server.repo.connection.manager.query(`UPDATE table_lahan SET urutan = ${index + 1} WHERE id = ${it.id}`);
      });
      

      resp.json(result);
    } catch (err) {
      console.log(err);
      resp.status(500).end('Fail to run ranking');
    }
  }
};

export const CriteriaRatingBuilder = (server: Server) => {
  return async (req: Request, resp: Response) => {
    try {
      resp.json(getMatchRatingItems());
    } catch (err) {
      console.log(err);
      resp.status(500).end('Fail to run ranking');
    }
  }
};

export const CriteriaRatingOptionBuilder = (server: Server) => {
  return async (req: Request, resp: Response) => {
    try {
      resp.json(RatingRule.map(arr => {
        return {
          ling: arr[0],
          value: arr[1]
        };
      }));
    } catch (err) {
      console.log(err);
      resp.status(500).end('Fail to run ranking');
    }
  }
};

export const CriteriaRatingWriteBuilder = (server: Server) => {
  return async (req: Request, resp: Response) => {
    try {
      let x: IRating = (req.body as IRating);
      writeRatings(x, (err) => {
        if (err) {
          console.log(err);
          resp.status(500).end('Fail to write criteria ranking');
        } else {
          resp.end('ok');
        }
      });
    } catch (err) {
      console.log(err);
      resp.status(500).end('Fail to run ranking');
    }
  }
};

