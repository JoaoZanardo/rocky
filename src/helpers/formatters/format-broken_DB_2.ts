import { formatCorruptedString } from "./format-corrupted-string";

export type BrokenDB2 = {
    id_marca: number;
    marca: string;
}[]

export type Brand = {
    id_marca: number;
    marca: string;
}

export const formatBrokenDB2 = (db: BrokenDB2): Brand[] => {
    for (const brand of db) {
        brand.marca = formatCorruptedString(brand.marca);
    }

    return db;
};