// --- 1. O Jeito "Simples" e Moderno em JS Puro (Sem TypeScript) ---
// Usamos Object.freeze para impedir que alguém mude os valores depois.
const StatusSimples = Object.freeze({
    Ativo: 0,
    Inativo: 1,
    Pendente: 2
});

console.log(StatusSimples.Ativo); // 0

// Tentar mudar dá erro (em modo estrito) ou falha silenciosamente:
// StatusSimples.Ativo = 99; // Não funciona!


// --- 2. O Problema desse jeito simples ---
// Nenhuma ferramenta te avisa se você usar um valor errado "antes" de rodar.
function processar(status) {
    // Eu posso passar "500" aqui e o JS aceita.
}


// --- 3. A Segurança do TypeScript ---
/*
No TypeScript, se você tem:
enum Status { Ativo, Inativo }

function processar(s: Status) { ... }

1. Erro de Digitação: `processar(Status.Ativvvo)` -> O compilador GRITA e não deixa rodar.
2. Valor Inválido: `processar(99)` -> Erro: "Argument 99 is not assignable to parameter of type Status".
3. Refatoração: Mudou "Ativo" pra "Active"? O VSCode renomeia em centenas de arquivos de uma vez.
*/
