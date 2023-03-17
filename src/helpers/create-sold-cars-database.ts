import { FinalDB } from "./join";

type SoldCars = {
    marca: string;
    nome: string;
    vendas: number;
    total: number;
}

export const createSoldCarsDB = (finalDB: FinalDB): SoldCars[] => {
    const soldCars: SoldCars[] = [];
    for (const car of finalDB) {
        let exists = false;
        if (soldCars.length) {
            for (const i of soldCars) {
                if (i.nome === car.nome) {
                    i.vendas += car.vendas;
                    i.total += car.valor * car.vendas;
                    exists = true;
                }
            }
        }
        if (!exists) {
            soldCars.push({
                marca: car.marca,
                nome: car.nome,
                vendas: car.vendas,
                total: car.valor * car.vendas
            });
        }
    }
    
    return soldCars;
}