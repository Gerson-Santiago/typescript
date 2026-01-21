import { test, describe, expect } from "bun:test";
import { bubbleSort } from "../src/algoritmos/bubbleSort";

describe("Bubble Sort", () => {
    test("deve ordenar o pior caso", () => {
        const arr: number[] = [9, 8, 7, 6, 5, 4, 3, 2, 1]
        const sortedArr = bubbleSort(arr);
        expect(sortedArr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
    test("deve ordenar o melhor caso", () => {
        const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        const sortedArr = bubbleSort(arr);
        expect(sortedArr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
    test("deve ordenar um array de números", () => {
        const arr: number[] = [64, 34, 25, 12, 22, 11, 90];
        const sortedArr = bubbleSort(arr);
        expect(sortedArr).toEqual([11, 12, 22, 25, 34, 64, 90]);
    });
    test("deve ordenar um array de números", () => {
        const arr: number[] = [64, 34, 25, 12, 22, 11, 90];
        const sortedArr = bubbleSort(arr);
        expect(sortedArr).toEqual([11, 12, 22, 25, 34, 64, 90]);
    });
    test("deve retornar vazio", () => {
        const arr: number[] = [];
        const sortedArr = bubbleSort(arr);
        expect(sortedArr).toEqual([]);
    })
})