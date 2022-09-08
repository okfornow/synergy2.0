let arrA = [1, 2];
let arrB = [2, 3];

function arrIntersection (arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                result.push(arr1[i]);
            }
        }
    }
    console.log(result);
}

arrIntersection(arrA, arrB);