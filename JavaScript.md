# JavaScript Interview Questions

Tell me about some cool JavaScript work you've done.

## Drupal Related
* Behaviors?
* Explain `AJAX` in as much detail as possible.
* Explain how `JSONP` works (and how it's not really `AJAX`).

## General Knowledge
* Why is it called a Ternary expression, what does the word 'Ternary' indicate?
* What is `use strict`;? what are the advantages and disadvantages to using it?
* How do you go about testing your JavaScript?
* Globals scope
* Explain how `this` works in JavaScript.
* Explain how prototypal inheritance works.
* What's the difference between a variable that is: `null`, `undefined` or `undeclared`?
  * How would you go about checking for any of these states?
* What's the difference between `.call` and `.apply`?
* What's the difference between an `attribute` and a `property`?
* Difference between `document.load` event and `document.ready` event?
* What is the difference between `==` and `===`?
* What's a typical use case for anonymous functions?

## Problem solving

### Modulus operator
Iterates up to 100 while outputting `fizz` at multiples of 3, `buzz` at multiples of 5 and `fizzbuzz` at multiples of 3 and 5. Explain. 

```javascript
var i, output;
for (i = 1; i < 101; i++) {
  output = '';
  if (!(i % 3)) output += 'Fizz';
  if (!(i % 5)) output += 'Buzz';
  console.log(output || i);
}
```

### IIFE
Explain why the following doesn't work as an IIFE: function. What needs to be changed to properly make it an IIFE?
```javascript
foo(){ }();
```

### JavaScript return statements; missing semicolons. 

```javascript
function func1()
{
  return {
      batman: 'robin'
  };
}

function func2()
{
  return
  {
      batman: 'robin'
  };
}
```

### Number.isInteger()
ECMAscript 6 which introduces a new Number.isInteger(), how would you write this in ECMAscript 5, any pitfalls?

```javascript
parseInt(1000000000000000000000, 10) === 1000000000000000000000
// false
// 1e+21
```

### Palindrome
Create a function that creates a palindrom from a string.

```javascript
function isPalindrome(str) { return str.split('').reverse().join('') === str; }
```

### typeof
Any pitfalls when checking to see if `batman` is an object.

### Closures
Memory consumption, functions within functions & redefining the prototype.

### Scope

### Hoisting

```javascript
console.log(x === undefined); // true
var x = 3;
```

Functions in JavaScript are lexically rather than dynamically scoped. This means that they run in the scope in which they are defined, not the scope from which they are executed.

```javascript
var x = 'batman';
function f () {
    var x = 'robin';
    function g () { alert(x); }
    g();
}
f();

// alerts 'robin'
```
