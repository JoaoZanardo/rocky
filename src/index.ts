import BrokenDB1 from './data/broken/broken_database_1.json';
import BrokenDB2 from './data/broken/broken_database_2.json';
import { jsonToCsv, formatter, join } from './helpers';
import os from 'os';
import { convertCsvToXlsx } from '@aternus/csv-to-xlsx';
import fs from 'fs';
import { createSoldCarsDB } from './helpers/create-sold-cars-database';
import { createSoldBrandsDB } from './helpers/create-sold-brands-database';

// Fix corrupted data.
const { carsDB, brandsDB } = formatter(BrokenDB1, BrokenDB2);

// Unify "carsDB" and "brandsDB" { data, marca, nome, vendas, valor }
const finalDB = join(carsDB, brandsDB);

// Create "soldCars" and "soldBrands" - JSON.
const soldCars = createSoldCarsDB(finalDB);
const soldBrands = createSoldBrandsDB(finalDB);

// Write "carsDb" and "brandsDB" inside "./data".
fs.writeFileSync(`${__dirname}/data/cars_database.json`, JSON.stringify(carsDB));
fs.writeFileSync(`${__dirname}/data/brands_database.json`, JSON.stringify(brandsDB));

// Write "finalDB" as CSV in user´s Desktop
fs.writeFileSync(`${os.homedir()}/Desktop/database.csv`, jsonToCsv(finalDB));

//Create "temp" folder.
fs.mkdirSync(`${__dirname}/temp`);

// Write "soldCars" and "soldBrands" as CSV in "./temp".
fs.writeFileSync(`${__dirname}/temp/sold_cars.csv`, jsonToCsv(soldCars));
fs.writeFileSync(`${__dirname}/temp/sold_brands.csv`, jsonToCsv(soldBrands));

// Verify if "carros-vendas".xlsx and marcas-vendas.xlsx already exists.
// If they do not exist, write "soldCars" and "soldBrands" as XLSX files to the user's desktop.
if (
    !fs.existsSync(`${os.homedir()}/desktop/carros-vendas.xlsx`) 
    || !fs.existsSync(`${os.homedir()}/desktop/marcas-vendas.xlsx`)
) {
    convertCsvToXlsx(`${__dirname}/temp/sold_cars.csv`, `${os.homedir()}/desktop/carros-vendas.xlsx`);
    convertCsvToXlsx(`${__dirname}/temp/sold_brands.csv`, `${os.homedir()}/desktop/marcas-vendas.xlsx`);
}

// delete "temp" folder.
fs.rmSync(`${__dirname}/temp/sold_cars.csv`);
fs.rmSync(`${__dirname}/temp/sold_brands.csv`);
fs.rmdirSync(`${__dirname}/temp`);
