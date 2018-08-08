String.prototype.isNumber = function() {
    return !isNaN(parseFloat(this)) && isFinite(this);
}

function calculate (expression) {
    
    let numStack = [];
    
    expression = expression.split(" ");

    expression.forEach(function(element) {
        if (element.isNumber()) {
          numStack.push(element)
        } else {
            let num1 = numStack.pop();
            let num2 = numStack.pop();
              if (element === "+") {
                  numStack.push(parseInt(num1) + parseInt(num2)); 
              } else if (element === "-"){
                numStack.push(parseInt(num2) - parseInt(num1));
              } else if (element === "*"){
                numStack.push(parseInt(num1) * parseInt(num2));
              } else if (element === "/"){
                numStack.push(parseInt(num2) / parseInt(num1));
              }
        }
    });
    numStack.length > 1 ? "Error" : numStack.pop();
}
console.log();

