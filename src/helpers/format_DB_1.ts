type DB = {
    data: string;
    id_marca_: number;
    vendas: number | string;
    valor_do_veiculo: number;
    nome: string;
}[]

type FormattedDB = {
    data: string;
    id_marca_: number;
    vendas: number;
    valor_do_veiculo: number;
    nome: string;
}[]

export const formatDB1 = (db: DB): FormattedDB => {
    let formattedDb: FormattedDB = [];
    for (const car of db) {
        for (const letter of car.nome) {
            if (letter === 'æ') {
                car.nome = car.nome.replace('æ', 'a');
            }
            if (letter === "ø") {
                car.nome = car.nome.replace('ø', 'o');
            }
        }
        
        car.vendas = Number(car.vendas);
        formattedDb.push({...car, vendas: car.vendas as number});
    }

    return formattedDb;
};