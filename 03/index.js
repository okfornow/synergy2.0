let object = {
  a: 1,
  b: 2
}

function removeElement(obj, value) {
    if (obj.hasOwnProperty(value)) {
        Reflect.deleteProperty(obj, [value]);
    }
    console.log(object);
}  

removeElement(object, 'b');