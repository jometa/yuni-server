"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const source_1 = require("./source");
exports.push = source_1.push;
exports.connect = source_1.connect;
exports.CmdNewLahan$ = source_1.CmdNewLahan$;
exports.CmdUpdateLahan$ = source_1.CmdUpdateLahan$;
const handlers_1 = require("./handlers");
const db_observable_1 = require("./db-observable");
const operators_1 = require("rxjs/operators");
const SystemUp = db_observable_1.repo$.pipe(operators_1.map(handlers_1.createHandlers), operators_1.tap((handlers) => {
    source_1.CmdNewLahan$.subscribe(handlers.insert.apply);
    source_1.CmdUpdateLahan$.subscribe(handlers.update.apply);
}), operators_1.publish());
exports.SystemUp = SystemUp;
function connectEsCqrs() {
    source_1.connect();
    SystemUp.connect();
}
exports.connectEsCqrs = connectEsCqrs;
