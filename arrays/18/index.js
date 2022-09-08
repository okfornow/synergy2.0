arrA = [1, 2, [3, 4, [5]]];

function flattenArr(arr) {
    result = [];
    for (key in arr) {
        if (typeof (arr[key]) == 'number') {
            result.push(arr[key]);
        } else {
            for (keyInArr in arr[key]) {
                if (typeof (arr[key][keyInArr]) == 'number') {
                    result.push(arr[key][keyInArr]);
                } else {
                    for (keyIn2Arr in arr[key][keyInArr]) {
                        result.push(arr[key][keyInArr][keyIn2Arr]);
                    }
                }
            }
        }
    }
    console.log(result);
}

flattenArr(arrA);