let objA = {
    a:1,
    b: {
        c:3
    }
}

let objB = {
    d:1,
    b: {
        c:3
    }
}

function compareObj (obj1, obj2) {
    let obj3 = {};
    if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
        console.log(obj1);
    } else {
        for (key in obj1) {
            for (key in obj2) {
                }
            }
        }
        if (JSON.stringify(obj1[key]) === JSON.stringify(obj2[key])) {
            console.log(obj1[key]);
    }
}

compareObj(objA, objB);