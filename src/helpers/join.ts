import { Brand, Car } from "./formatters";

type FinalDB = {
    data: string;
    marca: string;
    nome: string;
    vendas: number;
    valor: number;
}

export const join = (carsDB: Car[], brandsDB: Brand[]): FinalDB[] => {
    let finalDB: FinalDB[] = [];

    carsDB.map(car => {
        brandsDB.map(brand => {
            if (car.id_marca_ === brand.id_marca) [
                finalDB.push({
                    data: car.data,
                    marca: brand.marca,
                    nome: car.nome,
                    vendas: car.vendas,
                    valor: car.valor_do_veiculo
                })
            ]
        });
    });

    return finalDB;
}