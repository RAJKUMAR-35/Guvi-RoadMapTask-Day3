// 1. How to compare two JSON have the same properties without order?
// a. let obj1 = { name: "Person 1", age:5 };
// b. let obj2 = { age:5, name: "Person 1" };


function Equal(obj1, obj2){
    const key1 = Object.keys(obj1);
    const key2 = Object.keys(obj2);

    if (key1.length !== key2.length) {
        return false;
    }
    for (let key of key1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}

let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" };

console.log(Equal(obj1, obj2));

// Output : true














