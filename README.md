# factorial-calculator
A simple module to calculate the factorial of a number

## Installation
Install via NPM:

```bash

npm install factorial-calculator

```

## Usage

#### JavaScript (node)

```javascript

const factorial = require("factorial-calculator/dist-node");

factorial(5); // 5*4*3*2*1 -> 120

```

#### TypeScript / JavaScript

```typescript

import factorial from 'factorial-calculator/dist-browser';

factorial(4); // 4*3*2*1 -> 24

```

If function's argument less than 0 (negative number) or not a number at all the factorial function will return NaN

## Repo

[https://github.com/gsvidal/factorial-calculator](https://github.com/gsvidal/factorial-calculator)