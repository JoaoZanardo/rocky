import json1 from './data/formatted/db1.json';
import json2 from './data/formatted/db2.json';
import { jsonToCsv } from './helpers/json-to-csv';
import { writer } from './helpers/writer';

writer(`C:/Users/eders/Desktop/db1.csv`, jsonToCsv(json1));
writer(`C:/Users/eders/Desktop/db2.csv`, jsonToCsv(json2));