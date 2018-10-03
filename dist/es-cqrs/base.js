"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EsType;
(function (EsType) {
    EsType["COMMAND"] = "COMMAND";
    EsType["EVENT"] = "EVENT";
})(EsType = exports.EsType || (exports.EsType = {}));
class CommandEs {
    constructor(payload) {
        this.payload = payload;
        this.timestamp = new Date();
        this.type = EsType.COMMAND;
        this.name = 'COMMAND';
    }
}
exports.CommandEs = CommandEs;
class EventEs {
    constructor(payload) {
        this.payload = payload;
        this.timestamp = new Date();
        this.type = EsType.EVENT;
        this.name = 'EVENT';
    }
}
exports.EventEs = EventEs;
class CmdNewLahan extends CommandEs {
    constructor() {
        super(...arguments);
        this.name = 'CMD_NEW_LAHAN';
    }
}
exports.CmdNewLahan = CmdNewLahan;
class CmdUpdateLahan extends CommandEs {
    constructor() {
        super(...arguments);
        this.name = 'CMD_UPDATE_LAHAN';
    }
}
exports.CmdUpdateLahan = CmdUpdateLahan;
class CmdDelLahan extends CommandEs {
    constructor() {
        super(...arguments);
        this.name = 'CMD_DEL_LAHAN';
    }
}
exports.CmdDelLahan = CmdDelLahan;
class EvtNewLahanSuccess extends EventEs {
    constructor() {
        super(...arguments);
        this.name = 'EVENT_NEW_LAHAN_SUCCESS';
    }
}
exports.EvtNewLahanSuccess = EvtNewLahanSuccess;
class EvtNewLahanFailure extends EventEs {
    constructor() {
        super(...arguments);
        this.name = 'EVENT_NEW_LAHAN_FAILURE';
    }
}
exports.EvtNewLahanFailure = EvtNewLahanFailure;
class EvtUpdateLahanSuccess extends EventEs {
    constructor() {
        super(...arguments);
        this.name = 'EVENT_UPDATE_LAHAN_SUCCESS';
    }
}
exports.EvtUpdateLahanSuccess = EvtUpdateLahanSuccess;
class EvtUpdateLahanFailure extends EventEs {
    constructor() {
        super(...arguments);
        this.name = 'EVENT_UPDATE_LAHAN_FAILURE';
    }
}
exports.EvtUpdateLahanFailure = EvtUpdateLahanFailure;
class EvtDelLahanSuccess extends EventEs {
    constructor() {
        super(...arguments);
        this.name = 'EVENT_DEL_LAHAN_SUCCESS';
    }
}
exports.EvtDelLahanSuccess = EvtDelLahanSuccess;
class EvtDelLahanFailure extends EventEs {
    constructor() {
        super(...arguments);
        this.name = 'EVENT_DEL_LAHAN_FAILURE';
    }
}
exports.EvtDelLahanFailure = EvtDelLahanFailure;
