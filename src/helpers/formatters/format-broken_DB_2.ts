import { formatCorruptedString } from "./format-corrupted-string";

export type BrokenDB2 = {
    id_marca: number;
    marca: string;
}[]

export type Brand = {
    id_marca: number;
    marca: string;
}

export const formatBrokenDB2 = (brokenDB2: BrokenDB2): Brand[] => {
    const brandsDB: Brand[] = [];

    for (const brand of brokenDB2) {
        brand.marca = formatCorruptedString(brand.marca);
        brandsDB.push({
            id_marca: brand.id_marca,
            marca: brand.marca
        });
    }

    return brokenDB2;
};