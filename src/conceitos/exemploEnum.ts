// --- SITUAÇÃO 1: O PROBLEMA (Números Mágicos) ---
// O que significa o número 2 aqui? E o 1? Precisamos adivinhar ou ler documentação.
function atualizarPedidoRuim(pedido: any, novoStatus: number) {
    if (novoStatus === 2) {
        console.log("Enviando e-mail de entrega...");
    } else if (novoStatus === 3) {
        console.log("Iniciando processo de reembolso...");
    }
}
// Uso perigoso: Posso passar "99" e o código aceita (se for só number), mas lógica quebra.
// atualizarPedidoRuim({}, 2);


// --- SITUAÇÃO 2: A SOLUÇÃO (Enum) ---
// O Enum dá NOME aos valores. O código fica auto-explicativo.
enum StatusPedido {
    Pendente = 0,
    Processando = 1,
    Enviado = 2,
    Cancelado = 3
}

function atualizarPedidoBom(pedido: any, novoStatus: StatusPedido) {
    // Leitura fluida: "Se novo status for Enviado..."
    if (novoStatus === StatusPedido.Enviado) {
        console.log("Enviando e-mail de entrega...");
    } else if (novoStatus === StatusPedido.Cancelado) {
        console.log("Iniciando processo de reembolso...");
    }
}

// Uso seguro: O TypeScript te ajuda com autocomplete e validação.
atualizarPedidoBom({}, StatusPedido.Enviado);
