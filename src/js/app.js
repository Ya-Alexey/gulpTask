import { sayHello } from "./modules/functions.js";


let test = 'test test test';
console.log('first', test);
if (test) {
    test = "change test";
}
console.log('second', test);
sayHello();

async function f() {
    return 1;
  }
  
  f().then(alert);