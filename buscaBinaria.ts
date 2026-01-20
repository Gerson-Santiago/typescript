function buscaBinaria(arr: number[], target: number) {
    let inicio: number = 0
    let fim: number = arr.length - 1
    while (inicio <= fim) {
        let meio = Math.floor((inicio + fim) / 2)
        if (arr[meio] === target) {
            return meio
        }
        if (arr[meio] < target) {
            inicio = meio + 1
        }
        else {
            fim = meio - 1
        }
    }
    return -1
}

const lista: number[] = [7, 2, 1, 3, 4, 6, 5];
const target: number = 5;

const listaOrdenada: number[] = lista.sort((a, b) => a - b)
