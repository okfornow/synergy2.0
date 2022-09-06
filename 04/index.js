function isEmpty(obj) {
    if (Object.keys(obj).length === 0) {
        console.log(true);
    }
    for (let key in obj) {
        obj[key] === undefined ? console.log(true) : console.log(false);
    }
}

let obj1 = {};
let civic = {
    weight: 1500,
};

isEmpty(obj1);
isEmpty(civic);