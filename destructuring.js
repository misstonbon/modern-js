// extract multiple properties from object at the same time:

var user = {
    name: "Tanja",
    handle: "none",
    location: "Seattle, WA",
};

// can be rewritten as:

var {name, handle, location} = user;


// function that returns an object 

function getUser() {
    return {
        name: "Tanja",
        handle: "none",
        location: "Seattle, WA",
    };
}

// can be rewritten as: 

var {name, handle, location} = getUser();

/// ARRAY DESCTUCTURING ///

var user = ["Tanja Stroble", "none", "Seattle, WA"];

var name = user[0]; // and so on...

// can be rewritten as: 

var [name, handle, location] = user;

// Another example /////

var csv = "1997, Ford, F350, Must Sell!!";
var [ year, make, model, description ] = csv.split(",")

console.log(year); // 1997

// woohoo!

var user = {
    n: "Tanya", // don't be a douche and do this                (n: )to your coworkers!
    h: 'none',
    l: 'Seattle, WA',
}

var { n: name, h: handle, l:location } = user;

/// another good example: 

function fetchRepos ({language, minStars, maxStars, createdBefore, createdAfter }) {
    language = language || "All";
    minStars = minStars || 0;
    maxStars = maxStars || '';
    createdAfter = createdAfter || '';
    createdBefore = createdBefore || '' ;
}

// or just give function defaults in declaration:

function fetchRepos ({language = "All", minStars = 0 , maxStars ="", createdBefore = "", createdAfter = "" }) {
}; // same thing


// removes order necessity 
// we can also remove null values

fetchRepos({
    language: 'Javascript',
    // maxStars: null,
    // createdAfter: null,
    createdBefore: new Date('01/01/2017').getTime(),
    minStars: 100,
});

function getUserData(player) {
    return Promise.all([
        getProfile(player),
        getRepos(player)
    ]).then(function(data) {
        var profile = data[0];
        var repos = data[1];

        return {
            profile: profile,
            repos: repos
        }
    })
}

// rewrite as 

function getUserData(player) {
    return Promise.all([
        getProfile(player),
        getRepos(player)
    ]).then(function(data) {
        var [profile, repos] = data;

        return {
            profile: profile,
            repos: repos
        }
    })
}

// can be further refactored as:

function getUserData(player) {
    return Promise.all([
        getProfile(player),
        getRepos(player)
    ]).then(function([profile, repos]) {

        return {
            profile: profile,
            repos: repos
        }
    })
}

// and finally :

function getUserData(player) {
    return Promise.all([
        getProfile(player),
        getREpos(player)
    ]).then(([ profile, repos ]) => ({ profile, repos }))
};


function register (props) {
    return (
      <div>
        <span>Email:</span>
        <input type='text' onChange={props.onChangeEmail} value={props.email} />
        <span>Password:</span>
        <input type='text' onChange={props.onChangePassword} value={props.password} />
        <button onClick={props.submit}>Submit</button>
      </div>
    )
}

// can be rewritten as:

function register (props) {
    var onChangeEmail = props.onChangeEmail;
    var email = props.email;
    var onChangePassword = props.onChangePassword;
    var password = props.password;
    var submit = props.submit;
    return (
      <div>
        <span>Email:</span>
        <input type='text' onChange={onChangeEmail} value={email} />
        <span>Password:</span>
        <input type='text' onChange={onChangePassword} value={password} />
        <button onClick={submit}>Submit</button>
      </div>
    )
}

// so ugly, we can rewrite it better as :

function register (props) {
    var { onChangeEmail, email, onChangePassword, password, submit }  = props;
    return (
      <div>
        <span>Email:</span>
        <input type='text' onChange={onChangeEmail} value={email} />
        <span>Password:</span>
        <input type='text' onChange={onChangePassword} value={password} />
        <button onClick={submit}>Submit</button>
      </div>
    )
}

// yaas!

