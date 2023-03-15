import { DB2, formatDB2 } from "./formart_DB_2";
import { DB1, formatDB1 } from "./format_DB_1";

type FormatterReturn = { 
    json1: DB1;
    json2: DB2;
}

export const formatter = (db1: DB1, db2: DB2): FormatterReturn => {
    const json1 = formatDB1(db1);
    const json2 = formatDB2(db2);

    return {json1, json2};
};