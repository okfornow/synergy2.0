let obj = {
    A: 3,
    B: {
        C: 5,
        D: 7
    }
}

let civic = {
    weight: 1500,
    width: 450,
    engine: {
        hp: 190,
        torque: 246,
        rpm: 8000
    }
}

function checkObject(obj) {
    let arr = [];
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            let arrTwo = [];
            for (let keyObj in obj[key]) {
                arrTwo.push(obj[key][keyObj]);
            }
            arr.push(arrTwo);
        }
    }
    console.log(arr);
}

checkObject(civic);