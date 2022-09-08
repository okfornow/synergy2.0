arr1 = [1, 2 , 5, 2, 1];

function noDublicate (arr) {
    for (let i = 0; i < arr.length; i++){
        for (let j = 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                arr.splice(arr[i-1], 1);
            }
        }
    }
    console.log(arr);
}

noDublicate(arr1);