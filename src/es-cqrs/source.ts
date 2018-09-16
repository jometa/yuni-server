import { BaseEs, CommandEs, EventEs, EsType,
        CmdNewLahan, CmdUpdateLahan, CmdDelLahan,
      EvtDelLahanSuccess, EvtDelLahanFailure,
      EvtNewLahanSuccess, EvtNewLahanFailure,
      EvtUpdateLahanSuccess, EvtUpdateLahanFailure } from './base';

import { Subject, ConnectableObservable } from 'rxjs';
import { map, filter, publish } from 'rxjs/operators';
import * as moment from 'moment';

const sources = new Subject<BaseEs>();
const commands = new Subject<CommandEs>();
const events = new Subject<EventEs>();

sources.pipe( 
  filter(t => t.type == EsType.COMMAND),
  map<BaseEs, CommandEs>(t => (t as CommandEs))
).subscribe(commands);

sources.pipe( 
  filter(t => t.type == EsType.EVENT),
  map<BaseEs, EventEs>(t => (t as EventEs))
).subscribe(events);

// Default Logging handler
sources.subscribe({
  next: t => {
    let md = moment.default(t.timestamp).format("dddd, MMMM Do YYYY, h:mm:ss:SSS a");
    let type = t.type;
    console.log(`[${md}] got new ${type} => ${t.name}`);
  },
  error: err => {
    console.log('got error: ', err);
  }
});

export const CmdNewLahan$ = 
  commands.pipe(
    filter<CmdNewLahan>(t => t instanceof CmdNewLahan), 
    publish()
  ) as ConnectableObservable<CmdNewLahan>;

export const CmdUpdateLahan$ = 
  commands.pipe(
    filter<CmdNewLahan>(t => t instanceof CmdUpdateLahan), 
    publish()
  ) as ConnectableObservable<CmdUpdateLahan>;

export const CmdDelLahan$ = 
  commands.pipe(
    filter<CmdNewLahan>(t => t instanceof CmdDelLahan), 
    publish()
  ) as ConnectableObservable<CmdUpdateLahan>;

export const EvtNewLahanSuccess$ = 
  events.pipe(
    filter<EvtNewLahanSuccess>(t => t instanceof EvtNewLahanSuccess),
    publish()
  ) as ConnectableObservable<EvtNewLahanSuccess>;

export const EvtNewLahanFailure$ = 
  events.pipe(
    filter<EvtNewLahanSuccess>(t => t instanceof EvtNewLahanFailure),
    publish()
  ) as ConnectableObservable<EvtNewLahanFailure>;

export const EvtUpdateLahanSuccess$ = 
  events.pipe(
    filter<EvtNewLahanSuccess>(t => t instanceof EvtUpdateLahanSuccess),
    publish()
  ) as ConnectableObservable<EvtUpdateLahanSuccess>;

export const EvtUpdateLahanFailure$ = 
  events.pipe(
    filter<EvtNewLahanSuccess>(t => t instanceof EvtUpdateLahanFailure),
    publish()
  ) as ConnectableObservable<EvtUpdateLahanFailure>;

export const EvtDelLahanSuccess$ = 
  events.pipe(
    filter<EvtNewLahanSuccess>(t => t instanceof EvtDelLahanSuccess),
    publish()
  ) as ConnectableObservable<EvtDelLahanSuccess>;

export const EvtDelLahanFailure$ = 
  events.pipe(
    filter<EvtNewLahanSuccess>(t => t instanceof EvtDelLahanFailure),
    publish()
  ) as ConnectableObservable<EvtDelLahanFailure>;

export function connect() {
  [ CmdNewLahan$, CmdUpdateLahan$, CmdDelLahan$,
    EvtNewLahanSuccess$, EvtNewLahanFailure$,
    EvtUpdateLahanSuccess$, EvtUpdateLahanFailure$,
    EvtDelLahanSuccess$, EvtDelLahanFailure$ ].forEach(obs  => {
    obs.connect();
  });
}

export function push(e: BaseEs) {
  sources.next(e);
}
