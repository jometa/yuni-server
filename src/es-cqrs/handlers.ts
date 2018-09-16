import {
  CommandEs, EventEs,
  CmdNewLahan, CmdUpdateLahan, CmdDelLahan,
  EvtDelLahanSuccess, EvtDelLahanFailure,
  EvtNewLahanSuccess, EvtUpdateLahanSuccess, 
  EvtUpdateLahanFailure, EvtNewLahanFailure } from './base';

import { push, connect, 
      CmdNewLahan$, CmdUpdateLahan$, CmdDelLahan$,
      EvtNewLahanSuccess$, EvtUpdateLahanSuccess$, EvtDelLahanSuccess$ } from './source';

import { merge, combineAll } from 'rxjs/operators';

import { Repo, Lahan } from '../db';

export interface Handlers {
  update: UpdateHandler;
  insert: InsertHandler;
}

abstract class CommandHandler<CMD extends CommandEs, EV1 extends EventEs, EV2 extends EventEs> {
  public abstract done(result: any) : EV1;
  public abstract error(err: Error) : EV2;
  public abstract async f(cmd: CMD) : Promise<any>;

  async handle(cmd: CMD) {
    try {
      let result = await this.f(cmd);

      push(this.done(result));
    } catch (err) {
      console.log(err);
      push(this.error(err));
    }
  }
}

abstract class RepoCommandHandler<CMD, EV1, EV2> extends CommandHandler<CommandEs, EventEs, EventEs> {
  constructor (public repo: Repo) {
    super();
  }
}

export class InsertHandler extends RepoCommandHandler<CmdNewLahan, EvtNewLahanSuccess, EvtNewLahanFailure> {
  public done(result: any) { return new EvtNewLahanSuccess(result); };
  public error(err: Error) { return new EvtNewLahanFailure(err); }

  public async f(cmd: CmdNewLahan) {
    let lahan: Lahan = cmd.payload as Lahan;
    let result: any = await this.repo.insert(lahan);
    return result;
  }
  constructor (public repo: Repo) {
    super(repo);
  }
}

export class UpdateHandler extends RepoCommandHandler<CmdUpdateLahan, EvtUpdateLahanSuccess, EvtUpdateLahanFailure> {
  public done(result: any)  { return new EvtUpdateLahanSuccess(result); }
  public error(err: Error) { return new EvtUpdateLahanFailure(err); }
  public async f(cmd: CmdUpdateLahan) {
    let lahan: Lahan = cmd.payload.lahan as Lahan;
    let id: string = cmd.payload.id;
    return await this.repo.update(id, lahan);
  }
  constructor (public repo: Repo) {
    super(repo);
  }
}

export function createHandlers (repo: Repo): Handlers {
  return {
    insert: new InsertHandler(repo),
    update: new UpdateHandler(repo)
  }
}
