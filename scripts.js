
//Arrow Functions
const button = document.querySelector('#button');
console.log(this);

button.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(this);
})

//Deconstructing Arrays

let [a, b, c, d] = [1, 2, 3, 4];
console.log(a); // 1
console.log(b); // 2

//Deconstructing Objects
var luke = {
    occupation: 'jedi', 
    father: 'anakin'
};
let { occupation, father } = luke;
console.log(father); // or
 
//create  function that prints the statement for each variable
let charachters = [
    {
        name: "luke",
        father: 'anakin'
    },
    { 
        name: 'leia',
        father: 'anakin'
    }
];
charachters.forEach((char) => {
    let { name, father } = char;
    console.log('Hi i am ${name} and my dad is ${father}');
})

//rest parameters
const numbers = [1,2,3,4,5]
let [a,b,c,...rest] = numbers;
///... anything else will go into seperate array
console.log(a,b,c, rest)

//classes
class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    incrementAge() {
        this.age += 1;
    }
}
//promises
Promise.then(success_callback, error_callback);

promise 
    .then(success_callback_1)
    .then(success_callback_2)
    .catch(error_callback)
    .finally(clean_up_callback);
///////////////////////////////////

const json = (responose) => {
    return response.json();
}
const log = (data) => {d
    console.log(data);
    return data;
}

const getAliases = (data) => {
    console.log(data.aliases);
}

fetch('http:website.co')
    .then(json)
    .thenn(log)
    .then(getAliases)
    
////multiple promises
const fetchCharachter = (num) => {
    return fetch("http://web")
        .then(res => res.json())
}

Promise.all([
    fetchCharachter(583),
    fetchCharachter(200)

])
    .then(arrayOfResponses) => {
        console.log(arrayOfResponses)     
    }
///

const fetchHouse = (houseNum) => {
    return fetch(`http://web'/${houseNum}`)
    .then(res => res.json())
}

const fetchURLtoJson = (url) => {
    return fetch(url.then(res => res.json())
}

fetchHouse(362)
    .then(data => {
        const promises = data.swornHouses.map((charUrl) => {
            return fetchURLtoJson(charUrl);
        })
        return Promise.all(promises)
    })
    .then(log)
////////////////////////////
///control how long it happens
var p = new Promise(function (resolve, reject) {
    console.log()
    setTimeout(function () {
        resolve('Hello');
    }, 3000);
});

p.then(function (value) {
    console.log('DONE; ', value);
});