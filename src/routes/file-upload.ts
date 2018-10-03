import { RouteBuilder, RouteEndPoint } from './base';
import { Server } from '../server';
import { Request, Response } from 'express';
import { writeFile } from 'fs'

function make_rand_name(length: number) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

export const FileUploadBuilder = (server: Server) => {
  return async (req: Request, resp: Response) => {
    let _req = (req as any);
    let lid = req.body.id;
    if (!lid) {
      console.log('lahan id is invalid');
      resp.status(500).end('error');
      return;
    }

    try {
      let file = _req.files.image;

      if (file.truncated) {
        throw new Error('File is truncated, can\'t save it.')
      }

      let ext = file.name.split('.')[1];
      let new_name = `${make_rand_name(20)}.${ext}` ;

      file.mv(`public/medias/${new_name}`, err => {
        if (err) {
          console.log(err);
          resp.status(500).end('Fail to move file');
        } else {
          server.repo.addMedia(lid, new_name, false)
            .then(() => {
              resp.end('ok');
            })
            .catch(err => {
              console.log(err);
              resp.status(500).end('Something wrong');
            });
        }
      });

    } catch (err) {
      console.log(err);
      resp.status(500).end('Something wrong');
    }
  }
};

export const LoadFilesBuilder = (server: Server) => {
  return async (req: Request, resp: Response) => {
    try {
      let id: string = req.params.id;
      let result = await server.repo.getMedias(id);
      resp.json(result);
    } catch (err) {
      console.log(err);
      resp.status(500).end('error');
    }
  };
};

export const SetAvatarBuilder = (server: Server) => {
  return async (req: Request, resp: Response) => {
    try {
      let mid = req.params.mid;
      await server.repo.setAvatar(mid);
      resp.end('ok');
    } catch (err) {
      console.log(err);
      resp.status(500).end('error');
    }
  };
};

export const GetAvatarBuilder = (server: Server) => {
  return async (req: Request, resp: Response) => {
    try {
      let lid = req.params.lid;
      let url = await server.repo.getAvatar(lid);
      resp.json({ url });
    } catch (err) {
      console.log(err);
      resp.status(500).end('error');
    }
  };
};