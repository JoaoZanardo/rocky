import { BrokenDB1, formatDB1 } from "./format-broken_DB_1";
import { BrokenDB2, formatDB2 } from "./format-broken_DB_2";

type FormatterReturn = { 
    carsDB: BrokenDB1,
    brandsDB: BrokenDB2 
}

export const formatter = (db1: BrokenDB1, db2: BrokenDB2): FormatterReturn => {
    const carsDB = formatDB1(db1);
    const brandsDB = formatDB2(db2);

    return {carsDB, brandsDB};
};