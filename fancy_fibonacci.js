const fibonacci = n =>
  [...Array(n)].reduce(
    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
    []
  )

  /* Since we are in a Node environment, we can use process.hrtime() to benchmark
our functions. */

const NS_PER_SEC = 1e9;
const MS_PER_NS = 1e-6;

// A simple wrapper function for benchmarking our functions.
function simpleBenchmark(fn, name, ...args) {
  
  const start = process.hrtime();
  const result = fn(...args);
  const diff = process.hrtime(start);
  console.log(`${name} function took ${(diff[0] * NS_PER_SEC + diff[1]) *
    MS_PER_NS}ms with result:`);
//   console.log(result);
}

// Tests for charFreq function.
console.log('Start fancy fibonacci test:\n');
simpleBenchmark(fibonacci, "Fibonacci 10", 10);
simpleBenchmark(fibonacci, "Fibonacci 200", 200);
simpleBenchmark(fibonacci, "Fibonacci 300", 300);
simpleBenchmark(fibonacci, "Fibonacci 400", 400);
simpleBenchmark(fibonacci, "Fibonacci 15000", 15000);

function recursive_fib(n) {
        if (n < 2){
          return n
        }
        return recursive_fib(n - 1) + recursive_fib(n - 2)
}

console.log('Start recursive fibonacci test:\n');
simpleBenchmark(fibonacci, "Recursive Fibonacci 10", 10);
simpleBenchmark(fibonacci, "Recursive Fibonacci 200", 200);
simpleBenchmark(fibonacci, "Recursive Fibonacci 300", 300);
simpleBenchmark(fibonacci, "Recursive Fibonacci 400 ", 400);
simpleBenchmark(fibonacci, "Recursive Fibonacci 15000 ", 15000);

