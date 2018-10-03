"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("typeorm");
const config = require('../config.json');
let TableLahan = class TableLahan {
};
__decorate([
    typeorm_2.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], TableLahan.prototype, "id", void 0);
__decorate([
    typeorm_2.Column(),
    __metadata("design:type", String)
], TableLahan.prototype, "lokasi", void 0);
__decorate([
    typeorm_2.Column("double"),
    __metadata("design:type", Number)
], TableLahan.prototype, "lat", void 0);
__decorate([
    typeorm_2.Column("double"),
    __metadata("design:type", Number)
], TableLahan.prototype, "long", void 0);
__decorate([
    typeorm_2.Column("float"),
    __metadata("design:type", Number)
], TableLahan.prototype, "curahHujan", void 0);
__decorate([
    typeorm_2.Column("integer"),
    __metadata("design:type", Number)
], TableLahan.prototype, "sistemPengairan", void 0);
__decorate([
    typeorm_2.Column("integer"),
    __metadata("design:type", Number)
], TableLahan.prototype, "sumberAir", void 0);
__decorate([
    typeorm_2.Column("integer"),
    __metadata("design:type", Number)
], TableLahan.prototype, "kemiringanLahan", void 0);
__decorate([
    typeorm_2.Column("integer"),
    __metadata("design:type", Number)
], TableLahan.prototype, "teksturTanah", void 0);
__decorate([
    typeorm_2.Column("float"),
    __metadata("design:type", Number)
], TableLahan.prototype, "kedalamanTanah", void 0);
__decorate([
    typeorm_2.Column("integer"),
    __metadata("design:type", Number)
], TableLahan.prototype, "corganik", void 0);
__decorate([
    typeorm_2.Column("integer"),
    __metadata("design:type", Number)
], TableLahan.prototype, "bahayaBencana", void 0);
__decorate([
    typeorm_2.OneToMany(type => Media, media => media.lahan),
    __metadata("design:type", Array)
], TableLahan.prototype, "medias", void 0);
TableLahan = __decorate([
    typeorm_2.Entity()
], TableLahan);
exports.TableLahan = TableLahan;
let Media = class Media {
};
__decorate([
    typeorm_2.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Media.prototype, "id", void 0);
__decorate([
    typeorm_2.Column(),
    __metadata("design:type", String)
], Media.prototype, "path", void 0);
__decorate([
    typeorm_2.Column(),
    __metadata("design:type", Boolean)
], Media.prototype, "avatar", void 0);
__decorate([
    typeorm_2.ManyToOne(type => TableLahan, lahan => lahan.medias),
    __metadata("design:type", TableLahan)
], Media.prototype, "lahan", void 0);
Media = __decorate([
    typeorm_2.Entity()
], Media);
exports.Media = Media;
exports.converter = {
    toSql(lahan) {
        return lahan;
    },
    fromSql(tlahan) {
        return Object.assign({}, tlahan);
    }
};
class SqlRepo {
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield typeorm_1.createConnection({
                type: "sqlite",
                database: "yuni-db",
                entities: [
                    TableLahan,
                    Media
                ],
                synchronize: false,
                logging: true
            })
                .then(connection => {
                this.connection = connection;
                this.repo = this.connection.getRepository(TableLahan);
                this.media_repo = this.connection.getRepository(Media);
            })
                .catch(error => {
                console.log(error);
            });
        });
    }
    insert(lahan) {
        return __awaiter(this, void 0, void 0, function* () {
            let l = exports.converter.toSql(lahan);
            return yield this.repo.save(l);
        });
    }
    update(id, lahan) {
        return __awaiter(this, void 0, void 0, function* () {
            let l = exports.converter.toSql(lahan);
            return yield this.repo.update(parseInt(id), l);
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repo.delete(parseInt(id));
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repo.findOne(id).then(tl => exports.converter.fromSql(tl));
        });
    }
    getByIds(ids) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repo.findByIds(ids).then(items => items.map(exports.converter.fromSql));
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.repo.find();
            return result.map(exports.converter.fromSql);
        });
    }
    addMedia(id, path, avatar) {
        return __awaiter(this, void 0, void 0, function* () {
            let tl = yield this.repo.findOne(id);
            let media = new Media();
            media.path = path;
            media.avatar = avatar;
            media.lahan = tl;
            return yield this.media_repo.save(media);
        });
    }
    getMedias(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let tl = yield this.repo.findOne(id, { relations: ['medias'] });
            return tl.medias.map(t => {
                let url = `${config.host}:${config.port}/medias/${t.path}`;
                return Object.assign({}, t, { path: url });
            });
        });
    }
}
exports.SqlRepo = SqlRepo;
