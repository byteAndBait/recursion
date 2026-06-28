export function fibs(n) {
    const array = []
    for (let i = 0; i < n; i++) {
        if(array[i-2] == undefined){
            array.push(i)
            continue
        }
        array.push(array[i - 1] + array[i - 2])
    }
    return array
}

export function fibsRec(n) {
    if(n==0) return []
    if(n==1) return [0]
    if(n==2) return [0,1]
    const previous = fibsRec(n-1)
    return [...previous,previous.at(-1)+previous.at(-2)]
}