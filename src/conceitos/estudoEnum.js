// Vamos "simular" o que o TypeScript faz com o Enum
// Código original TS:
// enum Status { Ativo, Inativo }

var Status; // 1. Cria a variável

// 2. Executa a função imediatamente
(function (ObjetoStatus) {

    // O pulo do gato está nessa linha:
    // JS executa de dentro para fora.

    // Passo A: ObjetoStatus["Ativo"] = 0
    // Define a propriedade "Ativo" com valor 0.
    // E essa expressão RETORNA o valor 0.

    // Passo B: ObjetoStatus[0] = "Ativo"
    // Usa o retorno do passo anterior (0) como chave.

    ObjetoStatus[ObjetoStatus["Ativo"] = 0] = "Ativo";

    console.log("--- Passo 1 (Ativo) ---");
    console.log(ObjetoStatus);
    // Resultado: { Ativo: 0, '0': 'Ativo' }

    ObjetoStatus[ObjetoStatus["Inativo"] = 1] = "Inativo";

    console.log("\n--- Passo 2 (Inativo) ---");
    console.log(ObjetoStatus);

})(Status || (Status = {})); // Se Status for undefined, passa um objeto vazio {}

console.log("\n--- Resultado Final ---");
console.log(Status);
// Você pode acessar dos dois jeitos:
console.log("Pelo nome:", Status.Ativo); // 0
console.log("Pelo valor:", Status[0]);   // "Ativo"
