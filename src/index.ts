import BrokenDB1 from './data/broken/broken_database_1.json';
import BrokenDB2 from './data/broken/broken_database_2.json';
import { jsonToCsv, formatter, join } from './helpers';
import os from 'os';
import fs from 'fs';

const { carsDB, brandsDB } = formatter(BrokenDB1, BrokenDB2);
const finalDB = join(carsDB, brandsDB);

fs.writeFileSync(`${__dirname}/data/cars_database.json`, JSON.stringify(carsDB));
fs.writeFileSync(`${__dirname}/data/brands_database.json`, JSON.stringify(brandsDB));

fs.writeFileSync(`${os.homedir()}/Desktop/database.csv`, jsonToCsv(finalDB));