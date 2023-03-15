import BrokenDB1 from './data/broken/broken_database_1.json';
import BrokenDB2 from './data/broken/broken_database_2.json';
import { jsonToCsv, formatter, writer } from './helpers';

const { carsDB, brandsDB } = formatter(BrokenDB1, BrokenDB2);

writer(`${__dirname}/data/cars_database.json`, JSON.stringify(carsDB));
writer(`${__dirname}/data/brands_database.json`, JSON.stringify(brandsDB));

writer(`C:/Users/eders/Desktop/cars.csv`, jsonToCsv(carsDB));
writer(`C:/Users/eders/Desktop/brands.csv`, jsonToCsv(brandsDB));