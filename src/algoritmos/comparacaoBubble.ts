// --- 1. A versão que fizemos (Simples / "Ingênua") ---
/*
   Ele percorre o array INTEIRO todas as vezes, mesmo se já estiver ordenado.
   Complexidade: Sempre O(N^2).
*/
export function bubbleSortSimples(arr: number[]): number[] {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length - i; j++) {
            if (arr[j] < arr[j - 1]) {
                // Troca (Swap)
                const temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            }
        }
    }
    return arr;
}

// --- 2. O Clássico de Entrevista (Otimizado) ---
/*
   Adiciona uma bandeira (flag) "trocou".
   Se passar pelo array inteiro e não trocar nada, significa que já está ordenado!
   Para na hora.
   
   Melhor caso (array [1,2,3,4,5]): O(N) -> Muito mais rápido.
*/
export function bubbleSortClassico(arr: number[]): number[] {
    let n = arr.length;
    let trocou;

    do {
        trocou = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Troca
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;

                trocou = true; // Opa, mexemos em algo, precisa revisar de novo.
            }
        }
        n--; // Otimização extra: o último elemento já está garantido no lugar certo.
    } while (trocou);

    return arr;
}
