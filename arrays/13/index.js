let obj = {
    age: 30,
    name: "kek",
    q: 1,
    w: 2,
    e: undefined,
    r: NaN,
    t: ""
}

function checkObject(obj) {
    for (key in obj) {
        if (typeof (obj[key]) === 'string') {
            if (obj[key].length === 0) {
                delete obj[key];
            }
        } else if (isNaN(obj[key]) || typeof obj[key] == 'undefined' || typeof obj[key] == 0) {
            delete obj[key];
        }
    }
    console.log(obj)
}

checkObject(obj);
//1