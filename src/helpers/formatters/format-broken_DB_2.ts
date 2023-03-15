export type BrokenDB2 = {
    id_marca: number;
    marca: string;
}[]

type Brand = {
    id_marca: number;
    marca: string;
}

export const formatDB2 = (db: BrokenDB2): Brand[] => {
    for (const car of db) {
        for (const letter of car.marca) {
            if (letter === 'æ') {
                car.marca = car.marca.replace('æ', 'a');
            }
            if (letter === "ø") {
                car.marca = car.marca.replace('ø', 'o');
            }
        }
    }

    return db;
};