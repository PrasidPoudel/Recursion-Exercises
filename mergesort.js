function MergeSort(array) {
    if(array.length===0) return 'Noob'
    if (array.length === 1) return array
    let arr_left = MergeSort(array.slice(0, parseInt(array.length / 2)))
    let arr_right=MergeSort(array.slice(parseInt(array.length / 2), array.length))
    return Merge(arr_left, arr_right)
}

function Merge(arr1, arr2) {
    let length1 = 0;
    let length2 = 0;
    let new_arr = []
    while (length1 < arr1.length && length2 < arr2.length) {
        if (arr1[length1] > arr2[length2]) {
            new_arr.push(arr2[length2])
            length2++;
        } else if (arr1[length1] < arr2[length2]) {
            new_arr.push(arr1[length1])
            length1++
        } else {
            new_arr.push(arr1[length1], arr2[length2])
            length1++
            length2++;
        }
    }
    for (let i = length1; i < arr1.length; i++) {
        new_arr.push(arr1[i])
    }
    for (let i = length2; i < arr2.length; i++) {
        new_arr.push(arr2[i])
    }
    return new_arr
}
console.log(MergeSort([66,90,2,6821,9,1]))