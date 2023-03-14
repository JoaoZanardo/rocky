import DB1 from './data/broken/broken_database_1.json';
import DB2 from './data/broken/broken_database_2.json';
import { formatDB1, formatDB2 } from './helpers/formatters';
import { writer } from './helpers/writer';

const json1 = formatDB1(DB1);
const json2 = formatDB2(DB2);

writer(`${__dirname}/data/formatted/db1.json`, JSON.stringify(json1));
writer(`${__dirname}/data/formatted/db2.json`, JSON.stringify(json2));
writer(`C:/Users/eders/Desktop/db1.json`, JSON.stringify(json1));
writer(`C:/Users/eders/Desktop/db2.json`, JSON.stringify(json2));