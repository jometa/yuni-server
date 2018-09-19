import { Lahan } from '../db';
import { SqlRepo } from '../db-sql';
import { f_saw } from './index';

const repo = new SqlRepo();
repo.connect()
  .then(async () => {
    let data = await repo.getAll()
    let result = f_saw(data);
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });