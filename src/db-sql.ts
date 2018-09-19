import "reflect-metadata";
import {createConnection, Connection, Repository } from "typeorm";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { SistemPengairan, SumberMataAir, KemiringanLahan,
  TeksturTanah, COrganik, BahayaBencana, Lahan  } from './db';

const config = require('../config.json');

@Entity()
export class TableLahan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  lokasi: string;

  @Column("double")
  lat: number;

  @Column("double")
  long: number;

  @Column("float")
  curahHujan: number;

  @Column("integer")
  sistemPengairan: number;

  @Column("integer")
  sumberAir: number;

  @Column("integer")
  kemiringanLahan: number;

  @Column("integer")
  teksturTanah: number;

  @Column("float")
  kedalamanTanah: number;

  @Column("integer")
  corganik: number;

  @Column("integer")
  bahayaBencana: number;

  @OneToMany(type => Media, media => media.lahan)
  medias: Media[];
}

@Entity()
export class Media {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  path: string;

  @Column()
  avatar: boolean;

  @ManyToOne(type => TableLahan, lahan => lahan.medias)
  lahan: TableLahan;
}

export const converter = {
  toSql (lahan: Lahan): Partial<TableLahan> {
    return (lahan as TableLahan);
  },

  fromSql (tlahan: TableLahan): Lahan {
    return ({ ...tlahan } as Lahan);
  }
}

export class SqlRepo {

  public connection!: Connection;
  public repo!: Repository<TableLahan>;
  public media_repo!: Repository<Media>;

  async connect(): Promise<any> {
    return await createConnection({
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
  }

  async insert(lahan: Lahan): Promise<any> {
    let l = converter.toSql(lahan);
    return await this.repo.save(l);
  }

  async update(id: string, lahan: Lahan) : Promise<any> {
    let l = converter.toSql(lahan);
    return await this.repo.update(parseInt(id), l);
  }

  async remove(id: string) : Promise<any> {
    return await this.repo.delete(parseInt(id));
  }

  async getById(id: string) : Promise<Lahan> {
    return await this.repo.findOne(id).then(tl => converter.fromSql(tl));
  }

  async getByIds(ids: [string]) : Promise<Lahan[]> {
    return await this.repo.findByIds(ids).then(items => items.map(converter.fromSql));
  }

  async getAll() : Promise<Lahan[]> {
    let result = await this.repo.find()
    return result.map(converter.fromSql)
  }

  async addMedia (id: string | number, path: string, avatar: boolean) {
    let tl: TableLahan = await this.repo.findOne(id)
    let media: Media = new Media();
    media.path = path;
    media.avatar = avatar;
    media.lahan = tl;
    return await this.media_repo.save(media);
  }

  async getMedias (id: string | number): Promise<any[]> {
    let tl: TableLahan = await this.repo.findOne(id, { relations: ['medias'] })
    return tl.medias.map(t => {
      let url = `${config.host}:${config.port}/medias/${t.path}`;
      return Object.assign({}, t, { path: url });
    });
  }
}