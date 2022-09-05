let obj = {
    age: 30,
    name: "ded"
}

function checkObject(obj) {
    if (Array.isArray(obj)) {
        console.log("its array");
    } else if (obj == 0) {
        console.log("its empty")
    } else if (typeof obj === "object") {
        console.log(obj);
    }
}

checkObject(obj);
//1