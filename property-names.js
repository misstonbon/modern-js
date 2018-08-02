function objectify (key, value) {
    let obj = {}
    obj[key] = value;
    return obj
}

// can be revritten as:

function objectify (key, value) {
    return{
        [key]: value
    }
}
