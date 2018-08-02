// to set defasult parameters in ES6

function getInfo(name, lastName="Doe", age) {
    console.log(name);
    console.log(lastName);
    console.log(age);
}

// in this case getInfo has a default last name set, just in case none is provided when invoking the function 

function isRequired(param) {
    throw new Error(param + ` is required!`)
}

// this is a trick to ensure all of the params are required, throws error if they are not provided. So we have: 

function getInfo(name = isRequired('name'), lastName="Doe", age = isRequired('age')) {
    console.log(name);
    console.log(lastName);
    console.log(age);
}



