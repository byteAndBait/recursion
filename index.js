export function fibs(n) {
    const array = []
    for (let i = 0; i < n; i++) {
        if (array[i - 2] == undefined) {
            array.push(i)
            continue
        }
        array.push(array[i - 1] + array[i - 2])
    }
    return array
}

export function fibsRec(n) {
    if (n == 0) return []
    if (n == 1) return [0]
    if (n == 2) return [0, 1]
    const previous = fibsRec(n - 1)
    return [...previous, previous.at(-1) + previous.at(-2)]
}

function splitArray(arr) {
    let half = Math.ceil(arr.length / 2)
    return [arr.slice(0, half), arr.slice(half, arr.length)]
}
// export function mergeSort(array) {
//     if (array.length <= 1) {
//         return array;
//     }
//     const splittedArray = splitArray(array)
//     const leftHalf = mergeSort(splittedArray[0])
//     const rightHalf = mergeSort(splittedArray[1])
//     const sortedArray = []
//     while (leftHalf.length) {
//         if (leftHalf[0] <= rightHalf[0] || rightHalf[0] == undefined) {
//             sortedArray.push(leftHalf[0])
//             leftHalf.shift()
//         } else{
//             sortedArray.push(rightHalf[0])
//             rightHalf.shift()
//         }
//     }
//     sortedArray.push(...rightHalf)
//     return sortedArray
// } O(n2)


function merge(left, right) {
    let l = 0
    let r = 0;
    const result = []
    while (l < left.length && r < right.length) {
        if (left[l] <= right[r]) {
            result.push(left[l])
            l++
        } else {
            result.push(right[r])
            r++
        }
    }
    return [...result, ...left.slice(l), ...right.slice(r)];

}
export function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }
    const splittedArray = splitArray(array)
    const sortedLeft = mergeSort(splittedArray[0])
    const sortedRight = mergeSort(splittedArray[1])

    return merge(sortedLeft, sortedRight)
}
