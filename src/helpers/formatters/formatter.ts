import { BrokenDB1, Car, formatBrokenDB1 } from "./format-broken_DB_1";
import { Brand, BrokenDB2, formatBrokenDB2 } from "./format-broken_DB_2";

type FormatterReturn = { 
    carsDB: Car[],
    brandsDB: Brand[] 
}

export const formatter = (db1: BrokenDB1, db2: BrokenDB2): FormatterReturn => {
    const carsDB = formatBrokenDB1(db1);
    const brandsDB = formatBrokenDB2(db2);

    return {carsDB, brandsDB};
};