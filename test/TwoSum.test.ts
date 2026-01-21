import { expect, test, describe } from "bun:test";
import { twoSum } from "../src/algoritmos/TwoSum";

describe("Two Sum", () => {
    test("deve retornar índices corretos para um caso básico", () => {
        const arr = [2, 7, 11, 15];
        const target = 9;
        const resultado = twoSum(arr, target);
        expect(resultado).toEqual([0, 1]);
    });

    test("deve retornar array vazio se não houver solução", () => {
        const arr = [1, 2, 3];
        const target = 7;
        const resultado = twoSum(arr, target);
        expect(resultado).toEqual([]);
    });

    test("deve funcionar com números negativos", () => {
        const arr = [-1, -2, -3, -4, -5];
        const target = -8;
        // -3 (idx 2) e -5 (idx 4) -> -8
        // Ao iterar:
        // ...
        // i=2 (-3), comp=-5. Map tem -5? Não. Map[-3]=2.
        // ...
        // i=4 (-5), comp=-3. Map tem -3? Sim (2). Retorna [2, 4].
        const resultado = twoSum(arr, target);
        expect(resultado).toEqual([2, 4]);
    });

    test("deve retornar índices em qualquer ordem válida (neste caso, o algoritmo retorna [antigo, atual])", () => {
        // O algoritmo atual retorna [índice_armazenado, índice_atual], logo [menor, maior].
        const arr = [3, 2, 4];
        const target = 6;
        // 2+4=6. Indices 1 e 2.
        const resultado = twoSum(arr, target);
        expect(resultado).toEqual([1, 2]);
    });
});
