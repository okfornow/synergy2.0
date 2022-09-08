arrA = [1, 2, 3];
arrB = [1, 2, 3];
arrC = [1, 3, 3];

function compareArr(arr1, arr2) {
    let checker = 0;
    for (let i = 0; i < arr1.length; i++) {
        arr1[i] == arr2[i] ? checker += 1 : checker = 0;
    }
    checker == arr1.length ? console.log(true) : console.log(false);
}

compareArr(arrA, arrC);