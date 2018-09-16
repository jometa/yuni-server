import { connectEsCqrs, SystemUp, push, connect, CmdNewLahan$, CmdUpdateLahan$ } from './index';
import { BaseEs, CommandEs, EventEs, EsType,
  CmdNewLahan, CmdUpdateLahan, CmdDelLahan,
  EvtDelLahanSuccess, EvtDelLahanFailure,
  EvtNewLahanSuccess, EvtNewLahanFailure,
  EvtUpdateLahanSuccess, EvtUpdateLahanFailure } from './base';
import { Repo, defaultConfig,
  SistemPengairan, SumberMataAir,
  KemiringanLahan, TeksturTanah, COrganik,
  BahayaBencana } from '../db';

const example = {
  lokasi: 'Ende',
  lat: -10.179173, 
  long: 123.591715,
  curahHujan: 448,
  sistemPengairan: SistemPengairan.IRIGASI_PERMUKAAN,
  sumberAir: SumberMataAir.AGAK_BANYAK,
  kemiringanLahan: KemiringanLahan.AGAK_MELANDAI,
  teksturTanah: TeksturTanah.SEDANG,
  kedalamanTanah: 46,
  corganik: COrganik.TERSEDIA,
  bahayaBencana: BahayaBencana.RINGAN
};

SystemUp.subscribe(h => {
  push(new CmdNewLahan(example));
});

connectEsCqrs();

// abstract class A  {
//   protected abstract tap(): number;
//   public doSomething() {
//     console.log(`here is it: ${this.tap()}`);
//   }
// }

// abstract class B extends A {
//   constructor (public name: string) {
//     super();
//   }
// }

// class C extends B {
//   constructor (public name: string) {
//     super(name);
//   }
//   protected tap() {
//     return 9;
//   }
// }

// const c = new C("jo");
// c.doSomething();