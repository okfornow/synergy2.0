let object = {
    a: 4,
    b: NaN,
    c: {
        q: 1,
        w: 2,
        e: undefined,
        r: NaN,
        t: ""
    }
}

function isEmpty (obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            for (let property in obj[key]) {
                if (isNaN(obj[key][property]) || typeof obj[key][property] == 'undefined' || typeof obj[key][property] == "") {
                    console.log(true);
                } else if (typeof (obj[key][property]) === 'string' && obj[key][property].length === 0) {
                    console.log('true');
                } else {
                    console.log(false);
                }
            }
        }
    }
}


isEmpty(object);

/* switch (obj[key]) {
    case "":
        console.log("empty");
    case null:
        console.log("empty");
    case 
}
 
 if (Object.keys(obj[key]).length === 0) {
    console.log("false");
    break
} else {
    console.log("true");
} */

/* switch (obj[key]) {
    case "":
        console.log(true);
        break
    case null:
        console.log(true);
        break
    case undefined:
        console.log(true);
        break
    case isNaN():
        console.log(true);
        break
    case []:
        console.log(true);
        break
    default: 
        console.log(false);
} */