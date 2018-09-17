import { Repo, defaultConfig, Lahan } from '../db';
import { norm_matrix } from './index';

const repo = new Repo(defaultConfig);
repo.connect()
  .then(async () => {
    let data = await repo.getAll()
    norm_matrix(data);
  })
  .catch(err => {
    console.log(err);
  });