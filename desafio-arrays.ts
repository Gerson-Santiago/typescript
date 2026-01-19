import { Carro_v1 } from "./desafio-tipos"

const garagem: Carro_v1[] = [
    {
        modelo: "Gol",
        ano: 2013,
        tetoSolar: true,
    },
    {
        modelo: "Uno",
        ano: 13,
        tetoSolar: true,
    },
]

function mostrarCarro(carro: Carro_v1) {
    console.log(carro)
}

garagem.forEach(mostrarCarro)
