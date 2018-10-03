"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
const source_1 = require("./source");
class CommandHandler {
    apply(cmd) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield this.f(cmd);
                source_1.push(this.done(result));
            }
            catch (err) {
                source_1.push(this.error(err));
            }
        });
    }
}
class RepoCommandHandler extends CommandHandler {
    constructor(repo) {
        super();
        this.repo = repo;
    }
}
class InsertHandler extends RepoCommandHandler {
    done(result) { return new base_1.EvtNewLahanSuccess(result); }
    error(err) { return new base_1.EvtNewLahanFailure(err); }
    f(cmd) {
        return __awaiter(this, void 0, void 0, function* () {
            let lahan = cmd.payload;
            let result = yield this.repo.insert(lahan);
            return result;
        });
    }
}
exports.InsertHandler = InsertHandler;
class UpdateHandler extends RepoCommandHandler {
    done(result) { return new base_1.EvtUpdateLahanSuccess(result); }
    error(err) { return new base_1.EvtUpdateLahanFailure(err); }
    f(cmd) {
        return __awaiter(this, void 0, void 0, function* () {
            let lahan = cmd.payload.lahan;
            let id = cmd.payload.id;
            return yield this.repo.update(id, lahan);
        });
    }
}
exports.UpdateHandler = UpdateHandler;
function createHandlers(repo) {
    return {
        insert: new InsertHandler(repo),
        update: new UpdateHandler(repo)
    };
}
exports.createHandlers = createHandlers;
