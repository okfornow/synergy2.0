let arr1 = [1, 2, 5, 1, 2, 4];

function without (arr, a, b) {
    let newArr = arr.filter(function(value) {
        return (value != a && value != b)
    });
    console.log(newArr);
}

without (arr1, 1, 2);