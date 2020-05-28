---
slug: /tdd-with-react-jest
date: 2019-12-01
author: Tim Combs
title: TDD with React and Jest
tags: ["tdd", "testing", "react", "jest"]
published: false
---

# TDD - Test Driven Development

###### Pomodoro 1

## Set up learning environment

### Technologies

- Gatsby
- Git
- VS Code
- Prettier
- newDevCity BLOG
- Markdown Cheatsheet - make dark version for blog
- Online Pomodoro timer - https://tomato-timer.com/
- Ambient Playlist - 57: Hainbach - http://musicforprogramming.net/

### Resources

- Test-driven development tutorial: What is test-driven development (TDD)? | lynda.com - https://www.youtube.com/watch?v=QCif_-r8eK4
- An Introduction to Test-Driven Development | freeCodeCamp - https://www.freecodecamp.org/news/an-introduction-to-test-driven-development-c4de6dce5c/
- How to write more powerful unit tests by using value assertions - https://www.freecodecamp.org/news/how-to-write-powerful-unit-tests-using-value-assertions-3de5146c0088/

###### Pomodoro 2

## Continue digging in to Gatsby

- Trying to get blog post to appear on index.html
- Technical Debt
  - Each time you come to code you are a different person
  - what is the structure of each blog post
  - don't forget to make sure you have structured THE SLUG correctly
  - the slug is the top part of the markdown for each post
  - each markdown file is placed in the posts folder

## Prettier

- Prettier is an Opinionated Code Formatter
- a library that formats your code with very few customizable options
- Gatsby uses Prettier
- Prettier uses double-quotes out-of-the-box for Javascript and JSX
- Gatsby is built with React which uses JSX

### How to make Prettier use single-quotes

- VS-Code

  - find Prettier in your extensions
  - open the settings (click command-comma)
  - search setting for "quotes"
  - mark checkbox Prettier: Jsx Single Quote
  - mark checkbox Prettier: Single Quote

- .pretttierrc

  - json configuration file for Prettier
  - will override the VS-Code settings
  - create or locate in the root directory of your project
  - make sure it has the following two lines:

```json
  "singleQuote": true,
  "jsxSingleQuote": true
```

###### Pomodoro 3

## What is TDD video

- TDD shares two elements of unit testing:
  - a unit of application logic to test
  - a test for that logic
  - a unit of application logic to test
- Unit tests alone are not test driven development
- TDD asks us to write the test first
  - we logic out the code first
  - then write a test with that logic
  - each test initially fails
  - then write the code to make the test pass
  - lather rinse repeat
- Prioritizing the tests gives us focus and clarity

###### Pomodoro 4

## Intro to TDD Blog Post

- Testing

  - Correct inputs should generate correct outputs
  - Testing allows us to see a piece of logic as a black box
  - We _assert_ what are code should do and test to _verify_ it does

- Types of Testing
  - Manual Testing - Checking application with perspective of the User
  - Automated testing - writing code that tests other code
    - Unit Test - loosely, a test for a small piece of application functionality
    - End-to-End(E2E) Test - tests application as a whole
    - Developers do both types on a project

###### Pomodoro 5

## TDD Blog (cont)

- Test-Driven Development Priniciples
  - test logic comes BEFORE application logic
  - First make choices about what program should do
  - Then code a failing test
  - then code the logic to pass the test

### Blog Example using Jest

### User Story

- our app has a database
- users write posts which are uploaded into our database
- we need a better way to track their posts
- currently user is an object:

```javascript
user = {
  name: 'Sabrina Williams',
  email: 'sw@stylecouncil.org',
}
```

###### Pomodoro 6

## Deep Dive using Prettier - see Pomodoro 2

###### Pomodoro 7

## Deep Dive using Prettier - see Pomodoro 2

## TDD Blog (cont)

### User Story (cont)

- we want the posts that the user creates to be associated with the user
- do not want all the posts, just a reference to the posts
- lets put an array of post IDs on the user object

```javascript
user = {
  name: 'Sabrina Williams',
  email: 'sw@stylecouncil.org',
  posts: [arrayOfPostIDs], // not sure
}
```

###### Pomodoro 8

### Set up Jest Testing Environment

- Jest is a test suite
- combines both a testing library and an assertion library

#### Basic way to set up a Jest Environment

- create an NPM project at the command line

```bash
npm init

```

- create an id.spec.js file and add it to root directory of project
- Jest looks for a file name which includes either .spec or .test
- install jest as a development dependency at the command line

```bash
npm install jest --D

```

- update package.json "test" script

```json
{
  ...
  "scripts": {
    "test": "jest" // allows running test suite at command line
  },
    },
  "devDependencies": {
    "prettier": "^1.16.4",
    ,"jest": "^24.9.0"
  },
}
```

###### Pomodoro 9

## TDD Blog (cont)

### Jest Testing

- Tests are functions that receive arguments
- use either test() or it's alias it()

#### Basic test format

- expect() and toBe() are functions used to build assertions
- we "expect" the number 1 "to be" the number 1
- not a real test, but a known truthy to make sure the library is working

```javascript
// id.spec.js
test('jest is working', () => {
  expect(1).toBe(1)
})
```

#### Notes on Organizing Tests

- Usually unit tests are grouped logically
- keeps methods and their tests in the same logical structure
- in Jest we use describe() to divide the tests into sections

```javascript
describe('a group of tests to set up Jest', () => {
  test('Jest is working', () => {
    expect(1).toBe(1)
  })
})
```

#### Notes on Spec-Based Testing

- Using TDD means we need a plan to build our project BEFORE we start coding
- We need to break down the User Story in smaller units to test
- this will give us a list of specifications we will use to create tests

#### Mocking globals in Jest

- mocking a global object does not automatically reset that object after a test
- use
