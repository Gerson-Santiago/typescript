export interface Carro {
    marca: string;
    modelo: string;
    ano?: number | string;
    preco?: number;
    estoque?: boolean;
    tetoSolar: boolean;
}

const meuCarro: Carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2020,
    preco: 50000,
    estoque: true,
    tetoSolar: true,
}

console.log(meuCarro)
