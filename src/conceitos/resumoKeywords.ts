/// <reference lib="dom" />
// --- 1. O "Primo" do Object.freeze: readonly ---
// No JS você usa Object.freeze para travar. No TS, você usa 'readonly'.
interface Configuracao {
    readonly apiEndpoint: string;
    readonly tentativas: number;
}

const config: Configuracao = {
    apiEndpoint: "https://api.google.com",
    tentativas: 3
};

// config.tentativas = 5; // ERRO: Cannot assign to 'tentativas' because it is a read-only property.
// É assim que garantimos imutabilidade no TS!


// --- 2. As Fundamentais: 'type' vs 'interface' ---
// 90% do seu tempo você vai usar uma dessas duas para definir "modelos" de dados.

// 'type': Bom para unir coisas (União) ou dar apelidos para tipos simples.
type StatusID = number | string; // Pode ser número OU string
type Callback = (erro: Error | null) => void;

// 'interface': Melhor para objetos e classes (pode ser estendida).
interface Usuario {
    nome: string;
    email: string;
}

// --- 3. O Vilão e o Herói: 'any' vs 'unknown' ---

// 'any': "Desliga o TypeScript". Use só em emergência extrema.
let perigo: any = 10;
perigo.metodoQueNaoExiste(); // TS deixa passar (cai em produção).

// 'unknown': "Não sei o que é, mas me obrigue a verificar antes de usar".
let seguro: unknown = 10;
// seguro.toFixed(); // ERRO: O TS te obriga a checar o tipo.

if (typeof seguro === 'number') {
    seguro.toFixed(2); // Agora pode!
}


// --- 4. Utilitários Mágicos: 'keyof' e 'typeof' ---
const cores = {
    vermelho: "#FF0000",
    azul: "#0000FF"
};

// typeof: Pega o tipo de um valor existente.
type TipoCores = typeof cores;

// keyof: Pega as chaves de um tipo ("vermelho" | "azul").
type ChavesDeCor = keyof TipoCores;

function pintar(cor: ChavesDeCor) {
    console.log(cores[cor]);
}
pintar("azul"); // Autocomplete funciona aqui!
// pintar("verde"); // Erro!


// --- 5. Type Assertion: 'as' ---
// "Confia em mim, TS, eu sei o que estou fazendo".
// Use com moderação!
const input = document.getElementById("meu-input") as HTMLInputElement;
// Sem o 'as', o TS acharia que é apenas um HTMLElement genérico e não teria .value
console.log(input.value);
