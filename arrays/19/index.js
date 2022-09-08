let arr1 = [1, 2, 3, 4, 5];

function arrayChunk (arr) {
    let arrIn1 = [];
    let arrIn2 = [];
    let arrIn3 = [];
    let result = [];
    if (arr.length >= 2 && arr.length < 6) {
        for (let i = 0; i < 2; i++) {
            arrIn1.push(arr[i]);
        }
        for (i = 2; i < 4; i++) {
            arrIn2.push(arr[i]);
        }
        for (i = 4; i < arr.length; i++) {
            arrIn3.push(arr[i]);
        }
        result.push(arrIn1, arrIn2, arrIn3);
        console.log(result);
    }
}

arrayChunk(arr1);