import { Request, Response } from 'express';
import { Server } from '../server';

export type RouteEndPoint = (req: Request, resp: Response) => Promise<void>;
export type RouteBuilder = (server: Server) => RouteEndPoint;