export enum EsType {
  COMMAND = "COMMAND",
  EVENT = "EVENT"
}

export interface BaseEs {
  timestamp: Date;
  type: EsType;
  payload: any;
  name: string;
}

export abstract class CommandEs implements BaseEs {
  public timestamp: Date = new Date();
  public type: EsType = EsType.COMMAND;
  public name = 'COMMAND';
  constructor (public payload: any) {
  }
}

export abstract class EventEs implements BaseEs {
  public timestamp: Date = new Date();
  public type: EsType = EsType.EVENT;
  public name = 'EVENT';
  constructor (public payload: any) {
  }
}

export class CmdNewLahan extends CommandEs {
  public name: string = 'CMD_NEW_LAHAN';
}
export class CmdUpdateLahan extends CommandEs {
  public name: string = 'CMD_UPDATE_LAHAN';
}
export class CmdDelLahan extends CommandEs {
  public name: string = 'CMD_DEL_LAHAN';
}
export class EvtNewLahanSuccess extends EventEs {
  public name: string = 'EVENT_NEW_LAHAN_SUCCESS';
}
export class EvtNewLahanFailure extends EventEs {
  public name: string = 'EVENT_NEW_LAHAN_FAILURE';
}
export class EvtUpdateLahanSuccess extends EventEs {
  public name: string = 'EVENT_UPDATE_LAHAN_SUCCESS';
}
export class EvtUpdateLahanFailure extends EventEs {
  public name: string = 'EVENT_UPDATE_LAHAN_FAILURE';
}
export class EvtDelLahanSuccess extends EventEs {
  public name: string = 'EVENT_DEL_LAHAN_SUCCESS';
}
export class EvtDelLahanFailure extends EventEs {
  public name: string = 'EVENT_DEL_LAHAN_FAILURE';
}