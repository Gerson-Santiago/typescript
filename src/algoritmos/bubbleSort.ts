export function bubbleSort(arr: number[]): number[] {
    let n = arr.length
    let trocou;
    do {
        trocou = false
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                const temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                trocou = true
            }
        }
        n--
    } while (trocou)
    return arr
}
