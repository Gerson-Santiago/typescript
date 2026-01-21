export function buscaBinaria(arr: number[], target: number) {
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
