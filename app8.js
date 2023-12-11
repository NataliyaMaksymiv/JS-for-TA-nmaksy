// Task 1
let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, , ...z] = arr;
console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // "Bob"

    


// Task 2

let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
    };
    let {names: [name1, name2, name3, name4], ages: [age1, age2, age3, age4]} = data;
    console.log(name2); // "Tom"
    console.log(age2); // 24
    console.log(name4); // "Bob"
    console.log(age4); // 26
    
// Task 3

function mul(...data) {
    let numbers = 0;
        let result = data.reduce((prod, arg) => {         
        if (typeof arg === "number") {
            numbers++;
            return prod * arg;
        } else
            return prod;
    }, 1);
    if (numbers === 0) result = 0;
return result;
}

console.log(mul(1, "str", 2, 3, true));
console.log(mul(null , "str", false , true));

// Task 4

let server = {
    data: 0,
    convertToString: function(callback) {
        callback(() => `${this.data}`);
    }    
};

let client = {
    server: server,
    result: "",
    calc: function(data) {
        this.server.data = data;
        this.server.convertToString(this.notification());
    },
    notification: function() {
        return callback => {this.result = callback()};    
    }
}

client.calc(123);
console.log( client.result ); // "123"
console.log( typeof client.result ); // "string"


// Task 5

function mapBuilder(keysArray, valuesArray) {
    let map = new Map();
    keysArray.forEach((key, index) => map.set(key, valuesArray[index]));
    return map;
}

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", " i "];
let map = mapBuilder (keys, values);
console.log( map.size ); // 4
	console.log( map.get (2)); // "span"

