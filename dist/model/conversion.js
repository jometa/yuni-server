"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const memberships_1 = require("./memberships");
function fromLahan(lahan) {
    return [
        memberships_1.curahHujan(lahan.curahHujan),
        memberships_1.sistemPengairan(lahan.sistemPengairan),
        memberships_1.sumberMataAir(lahan.sumberAir),
        memberships_1.kemiringanLahan(lahan.kemiringanLahan),
        memberships_1.teksturTanah(lahan.teksturTanah),
        memberships_1.kedalamanTanah(lahan.kedalamanTanah),
        memberships_1.corganik(lahan.corganik),
        memberships_1.bahayaBencana(lahan.bahayaBencana)
    ];
}
exports.fromLahan = fromLahan;
