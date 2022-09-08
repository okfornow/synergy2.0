let civic = {
    weight: 1500,
    width: 450,
    engine: {
        hp: 190,
        torque: 246,
        rpm: 8000
    }
}

function checkObject(obj, a, b) {
    let arr = [];
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            for (let keyInside in obj[key]) {
                arr.push(obj[key][keyInside]);
            }
        }
        arr.splice(a, b);
    }
    console.log(arr);
}

checkObject(civic, 2, 1);