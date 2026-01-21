// --- 1. O Jeito "Mágico" do TypeScript (Padrão) ---
// Gera o IIFE (função) + Objeto Reverso.
enum EnumPadrao {
    A = 1,
    B = 2
}
// Vira JS:
// (function (EnumPadrao) { EnumPadrao[EnumPadrao["A"] = 1] = "A"; ... })(EnumPadrao || (EnumPadrao = {}));


// --- 2. O Jeito "Fantasma" (const enum) ---
// O objeto NÃO EXISTE no JavaScript final. O compilador só "troca" os nomes pelos números.
const enum EnumFantasma {
    X = 10,
    Y = 20
}
console.log(EnumFantasma.X);
// Vira JS: console.log(10);
// Zero peso no código final. Mas você não consegue fazer listas de opções para dropdowns.


// --- 3. O Jeito "Moderno e Seguro" (as const) ---
// Usa objeto JS puro + trava do TS. 
const EnumModerno = {
    Cima: 'UP',
    Baixo: 'DOWN'
} as const; // <--- Esse é o segredo!

// O 'as const' diz pro TS: "Esses valores nunca vão mudar. Trate como leitura apenas."
// Vira JS: const EnumModerno = { Cima: 'UP', Baixo: 'DOWN' };
// Simples, limpo e compatível com Object.freeze se quiser adicionar depois.

export function teste() {
    console.log("Padrão:", EnumPadrao.A);
    console.log("Fantasma:", EnumFantasma.X); // 10
    console.log("Moderno:", EnumModerno.Cima);
}
