let civic = {
    weight: 1500,
    width: 450,
    engine: {
        hp: 190,
        torque: 246,
        rpm: 8000
    }
}

let honda = {
    weight: 1500,
    width: 450,
    engine: {
        hp: 190,
        torque: 246,
        rpm: 8003
    }
}

function compareObj(obj1, obj2) {
    if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
        console.log("object 1 is same as object 2");
    } else {
        console.log("object 1 is different from object 2");
    }
}

compareObj(civic, honda);