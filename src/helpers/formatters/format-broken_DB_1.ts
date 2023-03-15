export type BrokenDB1 = {
    data: string;
    id_marca_: number;
    vendas: number | string;
    valor_do_veiculo: number;
    nome: string;
}[]

type Car = {
    data: string;
    id_marca_: number;
    nome: string;
    vendas: number;
    valor_do_veiculo: number;
}


export const formatDB1 = (brokenDB1: BrokenDB1): Car[] => {
    let carsDB: Car[] = [];

    for (const car of brokenDB1) {
        for (const letter of car.nome) {
            if (letter === 'æ') {
                car.nome = car.nome.replace('æ', 'a');
            }
            if (letter === "ø") {
                car.nome = car.nome.replace('ø', 'o');
            }
        }
        
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