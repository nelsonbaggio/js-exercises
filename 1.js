const myMatches = (a, b) => {
    const aProperties = Object.getOwnPropertyNames(a);
    const bProperties = Object.getOwnPropertyNames(b);

    // a have the same properties than b?
    // if (aProperties.length != bProperties.length) {
    //     return false;
    // }

    for (let index = 0; index < aProperties.length; index++) {
        if (a[aProperties[index]] != b[bProperties[index]]) {
            return false
        }

    }

    return true;
}

const bestMatches = (obj, source) => Object.keys(source).every(key => {
    return obj.hasOwnProperty(key) && obj[key] === source[key];
});

a = {
    name: "Sherlock holmes",
    // address: "221B Baker Street"
}

b = {
    name: "Sherlock holmes",
}

console.log("Is equal?", myMatches(a, b))
console.log("Is equal?", bestMatches(a, b));