"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const moment = __importStar(require("moment"));
const sources = new rxjs_1.Subject();
const commands = new rxjs_1.Subject();
const events = new rxjs_1.Subject();
sources.pipe(operators_1.filter(t => t.type == base_1.EsType.COMMAND), operators_1.map(t => t)).subscribe(commands);
sources.pipe(operators_1.filter(t => t.type == base_1.EsType.EVENT), operators_1.map(t => t)).subscribe(events);
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
exports.CmdNewLahan$ = commands.pipe(operators_1.filter(t => t instanceof base_1.CmdNewLahan), operators_1.publish());
exports.CmdUpdateLahan$ = commands.pipe(operators_1.filter(t => t instanceof base_1.CmdUpdateLahan), operators_1.publish());
exports.CmdDelLahan$ = commands.pipe(operators_1.filter(t => t instanceof base_1.CmdDelLahan), operators_1.publish());
exports.EvtNewLahanSuccess$ = events.pipe(operators_1.filter(t => t instanceof base_1.EvtNewLahanSuccess), operators_1.publish());
exports.EvtNewLahanFailure$ = events.pipe(operators_1.filter(t => t instanceof base_1.EvtNewLahanFailure), operators_1.publish());
exports.EvtUpdateLahanSuccess$ = events.pipe(operators_1.filter(t => t instanceof base_1.EvtUpdateLahanSuccess), operators_1.publish());
exports.EvtUpdateLahanFailure$ = events.pipe(operators_1.filter(t => t instanceof base_1.EvtUpdateLahanFailure), operators_1.publish());
exports.EvtDelLahanSuccess$ = events.pipe(operators_1.filter(t => t instanceof base_1.EvtDelLahanSuccess), operators_1.publish());
exports.EvtDelLahanFailure$ = events.pipe(operators_1.filter(t => t instanceof base_1.EvtDelLahanFailure), operators_1.publish());
function connect() {
    [exports.CmdNewLahan$, exports.CmdUpdateLahan$, exports.CmdDelLahan$,
        exports.EvtNewLahanSuccess$, exports.EvtNewLahanFailure$,
        exports.EvtUpdateLahanSuccess$, exports.EvtUpdateLahanFailure$,
        exports.EvtDelLahanSuccess$, exports.EvtDelLahanFailure$].forEach(obs => {
        obs.connect();
    });
}
exports.connect = connect;
function push(e) {
    sources.next(e);
}
exports.push = push;
