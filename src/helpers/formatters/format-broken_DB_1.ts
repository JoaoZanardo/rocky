import { formatCorruptedString } from "./format-corrupted-string";

export type BrokenDB1 = {
    data: string;
    id_marca_: number;
    vendas: number | string;
    valor_do_veiculo: number;
    nome: string;
}[]

export type Car = {
    data: string;
    id_marca_: number;
    nome: string;
    vendas: number;
    valor_do_veiculo: number;
}

export const formatBrokenDB1 = (brokenDB1: BrokenDB1): Car[] => {
    const carsDB: Car[] = [];

    for (const car of brokenDB1) {
        car.nome = formatCorruptedString(car.nome);
        car.vendas = Number(car.vendas);

        carsDB.push({
            data: car.data,
            id_marca_: car.id_marca_,
            nome: car.nome,
            vendas: car.vendas,
            valor_do_veiculo: car.valor_do_veiculo
        });
    }
    
    return carsDB;;
};