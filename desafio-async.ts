declare const Bun: any;
const texto = "Log do Capitão: Data Estelar 2026.";
async function main() {
    try {
        await Bun.write("diario.txt", texto);
        console.log("Diário salvo com sucesso");
    } catch (error) {
        console.log("Erro ao salvar diário", error);
    }
}

main();