import DB1 from './data/broken/broken_database_1.json';
import DB2 from './data/broken/broken_database_2.json';
import { formatter } from './helpers/formatters';
import { jsonToCsv } from './helpers/json-to-csv';
import { writer } from './helpers/writer';

const {json1, json2} = formatter(DB1, DB2);

writer(`${__dirname}/data/db1.json`, JSON.stringify(json1));
writer(`${__dirname}/data/db2.json`, JSON.stringify(json2));

writer(`C:/Users/eders/Desktop/db1.csv`, jsonToCsv(json1));
writer(`C:/Users/eders/Desktop/db2.csv`, jsonToCsv(json2));