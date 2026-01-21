
// 1. Versão Ingênua (For-For) - Sempre O(N^2)
function bubbleSortIngenuo(arrOriginal: number[]): number[] {
    const arr = [...arrOriginal]; // Cópia para não afetar o original
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// 2. Versão While (Com "Gambiarra" de inicialização)
function bubbleSortWhile(arrOriginal: number[]): number[] {
    const arr = [...arrOriginal];
    const n = arr.length;
    let trocou = true; // <--- A "Gambiarra" para entrar no loop
    while (trocou) {
        trocou = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                trocou = true;
            }
        }
    }
    return arr;
}

// 3. Versão Do-While Otimizada (Com n--)
function bubbleSortDoWhile(arrOriginal: number[]): number[] {
    const arr = [...arrOriginal];
    let n = arr.length;
    let trocou;
    do {
        trocou = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                trocou = true;
            }
        }
        n--; // <--- Otimização crucial
    } while (trocou);
    return arr;
}

// ====================================
//        Algoritmo Nativo JS 
// ====================================
// Usa Timsort ou QuickSort (super otimizado em C++)
function nativeSort(arrOriginal: number[]): number[] {
    const arr = [...arrOriginal];
    return arr.sort((a, b) => a - b);
}

// --- Setup do Teste ---
const TAMANHO = 10000;
console.log(`\n--- BENCHMARK BUBBLE SORT (Tamanho: ${TAMANHO} itens) ---`);

// Caso A: Array Aleatório
const aleatorio = Array.from({ length: TAMANHO }, () => Math.floor(Math.random() * TAMANHO));
console.log("\n[Cenário 1: Aleatório]");
medir("For-For (Ingênuo)", bubbleSortIngenuo, aleatorio);
medir("While (Gambiarra)", bubbleSortWhile, aleatorio);
medir("Do-While (Otimiz.)", bubbleSortDoWhile, aleatorio);
medir("JS Nativo (.sort)", nativeSort, aleatorio);

// Caso B: Array Quase Ordenado (Onde o Bubble Sort deve brilhar)
const quaseOrdenado = Array.from({ length: TAMANHO }, (_, i) => i);
// Bagunça só um pouquinho
quaseOrdenado[TAMANHO - 1] = 0;
console.log("\n[Cenário 2: Quase Ordenado]");
medir("For-For (Ingênuo)", bubbleSortIngenuo, quaseOrdenado);
medir("While (Gambiarra)", bubbleSortWhile, quaseOrdenado);
medir("Do-While (Otimiz.)", bubbleSortDoWhile, quaseOrdenado);
medir("JS Nativo (.sort)", nativeSort, quaseOrdenado);


function medir(nome: string, fn: Function, dados: number[]) {
    const inicio = performance.now();
    fn(dados);
    const fim = performance.now();
    const tempo = (fim - inicio).toFixed(2);
    // Cores para facilitar leitura
    console.log(`${nome.padEnd(20)}: ${tempo} ms`);
}
