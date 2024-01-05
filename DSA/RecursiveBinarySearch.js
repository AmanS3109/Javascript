function search (array, target, start, end){
    if (start > end) {
        return -1
    }

    const mid = Math.floor(start + (end - start) / 2);
    if (array[mid] == target) {
        return mid
    }
    if (target < array[mid]){
        return search(array, target, start, mid - 1)
    }
    return search(array, target, mid + 1, end)
}

let array = [1, 3, 5, 55, 66, 96]
const target = 55
answer = search(array, target, 0, array.length - 1)
console.log(answer)