
// Proxy Cache
function memoize(taget) {
    let cache = new Map();
    return new Proxy(taget, {
        apply(target, thisArg, args) {
            let key = args.join(",");
            if(cache.has(key)) {
                return cache.get(key);
            }
            let result = target.apply(thisArg, args);
            cache.set(key, result);
            return result;
        }
    });
}

function fibonacci(n) {
  if (n == 0 || n == 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

let memFib = memoize(fibonacci);

console.time("first");
    console.log(memFib(40));
console.timeEnd("first");

console.time("second");
    console.log(memFib(40));
console.timeEnd("second");