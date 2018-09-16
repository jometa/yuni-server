import { push, connect, CmdNewLahan$, CmdUpdateLahan$ } from './source';
import { createHandlers, Handlers } from './handlers';
import { repo$ } from './db-observable';
import { ConnectableObservable } from 'rxjs';
import { map, tap, publish } from 'rxjs/operators';

const SystemUp = ( <ConnectableObservable<Handlers>> repo$.pipe( 
  map(createHandlers),
  tap((handlers) => {
    CmdNewLahan$.subscribe(v => handlers.insert.handle(v));
    CmdUpdateLahan$.subscribe(v => handlers.update.handle(v));
  }),
  publish()
) );

function connectEsCqrs() {
  connect();
  SystemUp.connect();
}

export { connectEsCqrs, SystemUp, push, connect, CmdNewLahan$, CmdUpdateLahan$ };
