## How to run
Ensure you have node installed (instructions can be found at [nodejs.dev](https://nodejs.dev/en/)).

At the terminal, cd into the directory challenge.js is in and run `node challenge.js`. 

## Overview
I have created an array named `sampleQuestions` of 10 sample questions in the specified format, i.e. "What is dd + dd?"

The function `getAnswer` accepts a question number, finds the equation in the string using a regex (`equationRegex`) and assigns it to the variable `equationStr`. I then split the two two-digit numbers into their own variables, `num1` and `num2`, and return the sum. I've avoided using the built in function `eval()`, as it is generally [bad practice to utilise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#never_use_eval!).

`logQuestions` is composed of a simple `for` loop which assigns an `getAnswer[i]` value to the variable `answer` and calls `console.log()` in the specified format using a string literal. 

I've split the code into two functions, seperating the logic of evaluating the question and improving readability. 

`getAnswer` is not strictly a pure function as it calls an external array. I've done this more for readablity, but the arr could easily be inside of the `getAnswer` function.

I've attempted to give meaningful variable and function names for the benefit of those reviewing it. 

There is some potential bugs that could arise. To me, the two most apparent would be `getAnswer()` being passed an argument that is not a valid index number of `sampleQuestions`,  and `equationStr` not matching a sample question. Both can be easily handled with if/else statements.# rise-challenge
