import BrokenDB1 from './data/broken/broken_database_1.json';
import BrokenDB2 from './data/broken/broken_database_2.json';
import { jsonToCsv, formatter, writer, join } from './helpers';
import os from 'os';

const { carsDB, brandsDB } = formatter(BrokenDB1, BrokenDB2);
const finalDB = join(carsDB, brandsDB);

writer(`${__dirname}/data/cars_database.json`, JSON.stringify(carsDB));
writer(`${__dirname}/data/brands_database.json`, JSON.stringify(brandsDB));

writer(`${os.homedir()}/Desktop/database.csv`, jsonToCsv(finalDB));