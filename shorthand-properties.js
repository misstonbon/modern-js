function formatMessage(name, id,avatar) {
    // if name: name, just write name, JS provides syntactical sugar for that:
return {
    name, 
    id,
    avatar,
    timestamp: Date.now(),
    save: function() {
        //save message;
    } ,// or 
    alsoSave() {
        // function() can be omitted as well
    }
  }  
}

// likewise: 

function getUser(username) {
    const email = getEmail(username)
    return {
        username,  // instead of                               username: username,
        email
    }
}

