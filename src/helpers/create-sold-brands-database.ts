import { FinalDB } from "./join";

type Soldbrand = {
    nome: string;
    vendas: number;
    total: number;
}

export const createSoldBrandsDB = (finalDB: FinalDB): Soldbrand[] => {
    const soldBrands: Soldbrand[] = [];
    for (const car of finalDB) {
        let exists = false;
        if (soldBrands.length) {
            for (const brand of soldBrands) {
                if (car.marca === brand.nome) {
                    brand.vendas += car.vendas;
                    brand.total += car.valor * car.vendas;
                    exists = true;
                }       
            }
        }

        if (!exists) {
            soldBrands.push({
                nome: car.marca,
                vendas: car.vendas,
                total: car.vendas * car.valor
            })
        }
    }
    
    return soldBrands;
}