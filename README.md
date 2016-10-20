# TDD Code Katas

## Installation

- Clone this repository, navigate to the root of the project, and run `npm install`.
- To run a test once, run `gulp test` in the terminal
- To run tests whenever a file changes, run `gulp tdd` in the terminal.
- To view unit test code coverage details, run `gulp coverage` in the terminal.


## Practice

There are a number of exercises listed below for you to work through. Practice using test-driven development
while solving these code katas. Write tests first before fleshing out your solutions. Remember to use the minimum
amount of code necessary to make all the tests pass, refactoring as necessary (Red-Green-Refactor).

Create a function solving the kata in it's own file inside the `src/` directory. Assign it to `module.exports` so it
can used in to your test suite, which should reside in it's own file inside the `test/` directory. Don't forget the
.spec suffix. Ex: `src/test-name.js` gets tested in `test/test-name.spec.js`.


### Exercise 1 - Prime Factors

_Note_: This has already been completed in `src/prime-factors.js` and `test/prime-factors.spec.js` files. It can be
used as a reference.

Write a function that will return an array of all the prime factors of any positive integer.

#### Reference

Remember that a prime factor is a positive integer that is only divisible by itself and `1`.

Examples:

1. `2` is only divisible by itself and `1`. The function would return `[2]`
1. `3` is only divisible by itself and `1`. The function would return `[3]`
1. `4` is divisible by `2` and `2`
    >     4
    >   2 * 2
    `2 * 2 = 4`. The function would return `[2, 2]`
1. `5` is not divisible by `2` or `3`, but only by itself. The function would return `[5]`
1. `6` is divisible by `2` and `3`
    >     6
    >   2 * 3
    `2 * 3 = 6`. The function would return `[2, 3]`
1. `10` is divisible by `2` and `5`
    >     10
    >   2 * 5
    `2 * 5 = 10`. The functionwould return `[2, 5]`
1. `12` is divisible by `2` and `6`. `6` is not a prime number, but it is divisible by `2`
    >     12
    >   2 * 6
    >     2 * 3
    `2 * 2 * 3 = 12`. The function would return `[2, 2, 3]`
1. `100` is divisible by `2` and `50`. `50` is divisible by `2` and `25`, `25` is divisible by `5` and `5`
    >     100
    >   2 * 50
    >     2 * 25
    >       5 * 5
    `2 * 2 * 5 * 5 = 100`. The function would return `[2, 2, 5, 5]`


### Exercise 2 - Palindrome

Write a function that will determine if a string or number passed in is a palindrome or not.
@todo: Needs more instruction

#### Reference
@todo: Needs reference


### Exercise 3 - FizzBuzz

Write a function that will return `Fizz` if an integer entered is divisible by `3`, `Buzz` if a number entered is
divisible by `5`, `FizzBuzz` if a number entered is divisible by `3` *and* `5`, and return the number if not divisible
by `3` nor `5`.


### Exercise 4 - Roman Numerals Converter

Write a function that will convert a positive integer from 1 to 4999 into roman numerals.

#### Reference

| Number | Glyph |
|--------|-------|
| 1 | I |
| 2 | II |
| 3 | III |
| 4 | IV |
| 5 | V |
| 6 | VI |
| 7 | VII |
| 8 | VIII |
| 9 | IX |
| 10 | X |
| 11 | XI |
| 12 | XII |
| 15 | XV |
| 20 | XX |
| 30 | XXX |
| 40 | XL |
| 41 | XLI |
| 44 | XLIV |
| 50 | L |
| 90 | XC |
| 100 | C |
| 500 | D |
| 900 | CM |
| 1000 | M |
| 4000 | MMMM |


### Exercise 5 - Bowling Game

Write a function that will reproduce a scoring system for a game of bowling.

#### Reference

@todo needs finesse
A game of bowling consists of 10 frames. 10 pins.
In each frame, you can take one or two shots
Assuming you don't knock down all the pins in a frame, the score for the frame is the number of pins from the first
shot plus the nubmer of pins from the second shot.
Once you do all 10 frames, you compute the final score and return it.
- Spares: Not all pins are knocked down in the first frame, but the remainder are knocked down on the second frame.
The points of your next throw are added onto the frame. Ex: @todo example
- Strikes: All 10 pins are knocked down in the first frame. Next two throws are added to the 10 points. @todo example


### Exercise 6 - String Calculator

Write a function that will accept a string of numbers and return an integer representing the sum of the numbers
contained in the string.

Ex: `stringCalc('2,3,4')` would return `9`

#### Rules

1. An empty string passed in should be interpreted as `0`
1. Either comma or `\n` can be the delimeter
1. Numbers greater than 1000 should be ignored
1. Numbers less than 0 are not allowed


### Exercise 7 - Tennis Scoring

Write a function that translates points to the proper tennis score.

Ex: `tennisScore(0,2)` would return `Love-Thirty`

#### Rules

The first player to win 4 points is the winner, unless the score is 3 points to 3 points (a.k.a. "deuce").
Whenever the points are equal (from 3, upwards), the score is called "deuce." If player one scores a point after
"deuce," then it is player 1's advantage (a.k.a. "Advantage in"). If player two scores a point after "deuce," then
it is "Advantage out". This can go on indefinitely until one player scores two points in a row.

#### Reference

| Points | Score |
|--------|-------|
| 0-0 | Love-All |
| 1-0 | Fifteen-Love |
| 1-1 | Fifteen-All |
| 2-0 | Thirty-Love |
| 2-1 | Thirty-Fifteen |
| 2-2 | Thirty-All |
| 0-3 | Love-Forty |
| 3-3 | Deuce |
| 4-0 | Winner |
| 4-1 | Winner |
| 4-2 | Winner |
| 4-3 | Advantage In |
| 4-4 | Deuce |
| 4-5 | Advantage Out |
| 5-5 | Deuce |
| 5-6 | Advantage Out |
| 6-6 | Deuce |
| 7-6 | Advantage In |
| 7-7 | Deuce |
| 7-8 | Advantage Out |
| 7-9 | Winner |






