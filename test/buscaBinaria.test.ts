import { expect, test, describe } from "bun:test";
import { buscaBinaria } from "../src/algoritmos/buscaBinaria";

describe("Busca Binária", () => {
    test("deve encontrar um elemento no meio do array", () => {
        const arr = [1, 2, 3, 4, 5];
        expect(buscaBinaria(arr, 3)).toBe(2);
    });

    test("deve encontrar o primeiro elemento", () => {
        const arr = [1, 2, 3, 4, 5];
        expect(buscaBinaria(arr, 1)).toBe(0);
    });

    test("deve encontrar o último elemento", () => {
        const arr = [1, 2, 3, 4, 5];
        expect(buscaBinaria(arr, 5)).toBe(4);
    });

    test("deve retornar -1 se o elemento não existir", () => {
        const arr = [1, 2, 3, 4, 5];
        expect(buscaBinaria(arr, 99)).toBe(-1);
    });

    test("deve funcionar com array vazio", () => {
        const arr: number[] = [];
        expect(buscaBinaria(arr, 1)).toBe(-1);
    });

    test("deve funcionar com elementos negativos", () => {
        const arr = [-10, -5, 0, 5, 10];
        expect(buscaBinaria(arr, -5)).toBe(1);
    });
});
