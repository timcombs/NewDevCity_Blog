---
slug: /higher-order-functions
date: 2019-04-09
author: Tim Combs
title: Higher-Order Functions
tags: ["javascript", "functions"]
published: false
---

Javascript is a language that allows functions to be passed in as parameters and allows functions to return other functions. Not all languages do this. In JS functions are first-class entities.

A Higher-Order function is a function that either:
  - (a) Accepts a function as an argument
  - (b) Returns a function

(a)
```javascript
// .addEventListener is a higher-order function
document.addEventListener('click', amazeFunct);
  
function amazeFunct() {
  alert('Thanks for clicking!');
}
```  
(b)
```javascript
function createMultiplier(multiplier) {
  return function(x) {
    return x * multiplier;
  }
}
  
// note: the following three variables are functions that
// can be called, don't forget to pass the variable!!
let doubleMe = createMultiplier(2);
let tripleMe = createMultiplier(3);
let quadrupleMe = createMultiplier(4);

document.write(quadrupleMe(10));
```

Many of the Array methods are higher-order functions, like .forEach, .map, .filter, etc.