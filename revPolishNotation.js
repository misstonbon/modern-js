String.prototype.isNumber = function() {
    return !isNaN(parseFloat(this)) && isFinite(this);
}

function calculate (expression) {
  if (expression === "") return 0;
    
  let numStack = [];
    
  expression.split(" ")
            .map(element =>{
             if (element.isNumber()) {
               numStack.push(element)
            } else {
             let num1 = numStack.pop();
             let num2 = numStack.pop();
               if (element === "+") {
                 numStack.push(Number(num1) + Number(num2)); 
               } else if (element === "-"){
                numStack.push(Number(num2) - Number(num1));
               } else if (element === "*"){
                numStack.push(Number(num1) * Number(num2));
               } else if (element === "/"){
                numStack.push(Number(num2) / Number(num1));
               }
            }
  });
    return numStack.length > 1 ? Number(numStack.pop()) : numStack.pop();
}

const NS_PER_SEC = 1e9;
const MS_PER_NS = 1e-6;

function benchmark(fn, name, ...args) {
  
    const start = process.hrtime();
    const result = fn(...args);
    const diff = process.hrtime(start);
    console.log(`${name} function took ${(diff[0] * NS_PER_SEC + diff[1]) *
      MS_PER_NS}ms with result:`);
      
    // if you wish to see the result, uncomment this 
    console.log(result);  
  }

  benchmark(calculate, "calculate", "1 3 +");
  benchmark(calculate, "calculate", "");
  benchmark(calculate, "calculate", "1 2 3");
  benchmark(calculate, "calculate", "1 2 3.5");
  benchmark(calculate, "calculate", "1 3 +");
  benchmark(calculate, "calculate", "1 3 *");
  benchmark(calculate, "calculate", "1 3 -");
  benchmark(calculate, "calculate", "4 2 /");
