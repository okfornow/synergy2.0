let obj1 = {
    q: 5,
    w: 7,
    e: 9
}

let obj2 =  {
    a: 3,
    s: 8,
    g: 5
}

function checkArrayNum (obj1, obj2){
    let arr3 = [];
    let arr1 = Object.values(obj1);
    let arr2 = Object.values(obj2);
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if (arr1[i] === arr2[j]) {
                arr3.push(arr1[i]);
            }
        }
    }
    console.log(arr3);
}

checkArrayNum(obj1, obj2)