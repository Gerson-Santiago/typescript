export interface Carro_v1 {
    marca?: string;
    modelo?: string;
    ano?: number | string;
    preco?: number;
    estoque?: boolean;
    tetoSolar?: boolean;
}

const gol: Carro_v1 = {
    modelo: "Gol",
    ano: 2013,
    tetoSolar: true,
}

const funsa: Carro_v1 = {
    modelo: "Funsa",
    ano: "1987",
    tetoSolar: true,
}

console.log(gol, funsa);
