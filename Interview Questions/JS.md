Here are the answers to your questions in the requested format:

---

### **1. What is JavaScript and where is it used?**

#### **Definition**

JavaScript is a scripting language used to create dynamic and interactive web content.

#### **Key Differences**

| Feature   | JavaScript               | Other Languages (e.g., Python) |
| --------- | ------------------------ | ------------------------------ |
| Execution | Runs in browsers/Node.js | Runs on servers/standalone     |
| Typing    | Dynamically typed        | Can be statically typed        |

#### **Use Cases**

- Frontend (React, Angular).
- Backend (Node.js).
- Mobile (React Native).

#### **Code Snippet**

```javascript
console.log("Hello, World!");
```

#### **Best Practices**

- Use strict mode (`"use strict"`) to avoid silent errors.

---

### **2. What are the basic data types in JavaScript?**

#### **Definition**

Primitive types: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`.

#### **Key Differences**

| Type     | Example   | Mutability |
| -------- | --------- | ---------- |
| `string` | `"hello"` | Immutable  |
| `number` | `42`      | Immutable  |

#### **Use Cases**

- `symbol`: Unique object keys.
- `bigint`: Large integers.

#### **Code Snippet**

```javascript
let name = "Alice"; // string
let age = 25; // number
```

#### **Best Practices**

- Prefer `===` over `==` to avoid type coercion.

---

### **3. What is the difference between `null` and `undefined`?**

#### **Definition**

- `null`: Intentional absence of value.
- `undefined`: Variable declared but not assigned.

#### **Key Differences**

| Metric | `null`         | `undefined`        |
| ------ | -------------- | ------------------ |
| Type   | `object`       | `undefined`        |
| Usage  | Explicit empty | Default unassigned |

#### **Use Cases**

- Use `null` to reset a variable.
- `undefined` means "not initialized."

#### **Code Snippet**

```javascript
let a = null; // explicit empty
let b; // undefined
```

#### **Best Practices**

- Check for both: `if (x == null)` catches `null` and `undefined`.

---

### **4. How do you declare variables in JavaScript?**

#### **Definition**

Use `var`, `let`, or `const` (ES6+).

#### **Key Differences**

| Keyword | Scope    | Hoisting | Reassignable |
| ------- | -------- | -------- | ------------ |
| `var`   | Function | Yes      | Yes          |
| `let`   | Block    | No       | Yes          |
| `const` | Block    | No       | No           |

#### **Use Cases**

- `const`: For constants.
- `let`: Loop counters.

#### **Code Snippet**

```javascript
const PI = 3.14;
let count = 0;
```

#### **Best Practices**

- Prefer `const` > `let` > `var`.

---

### **5. What is the difference between `var`, `let`, and `const`?**

#### **Definition**

Scoping and mutability differences (see Q4).

#### **Key Differences**

| Metric      | `var` | `let`/`const` |
| ----------- | ----- | ------------- |
| Block Scope | No    | Yes           |

#### **Use Cases**

- Avoid `var` in modern code.

#### **Code Snippet**

```javascript
if (true) {
  var x = 1; // leaks out
  let y = 2; // block-scoped
}
```

#### **Best Practices**

- Use `let` for loops, `const` otherwise.

---

### **6. What is hoisting in JavaScript?**

#### **Definition**

Variable/function declarations are moved to the top of their scope during compilation.

#### **Key Differences**

| Declaration | Hoisted? | Initial Value |
| ----------- | -------- | ------------- |
| `var`       | Yes      | `undefined`   |
| `let/const` | No       | TDZ error     |

#### **Use Cases**

- Functions are fully hoisted (can be called before declaration).

#### **Code Snippet**

```javascript
console.log(x); // undefined (var)
var x = 5;
```

#### **Best Practices**

- Declare variables before use.

---

### **7. What is scope in JavaScript?**

#### **Definition**

Context where variables are accessible.

#### **Key Differences**

| Scope Type | Accessibility      | Example              |
| ---------- | ------------------ | -------------------- |
| Global     | Everywhere         | `window` in browsers |
| Block      | Within `{}` (ES6+) | `let`/`const`        |

#### **Use Cases**

- Avoid polluting global scope.

#### **Code Snippet**

```javascript
function foo() {
  let local = 1; // function-scoped
}
```

#### **Best Practices**

- Use IIFEs to isolate code.

---

### **8. What is the difference between `==` and `===`?**

#### **Definition**

- `==`: Loose equality (coerces types).
- `===`: Strict equality (no coercion).

#### **Key Differences**

| Operator | `1 == "1"` | `1 === "1"` |
| -------- | ---------- | ----------- |
| Result   | `true`     | `false`     |

#### **Use Cases**

- Always use `===` unless intentional coercion.

#### **Code Snippet**

```javascript
if (1 === 1) {
} // true
```

#### **Best Practices**

- ESLint rule: `eqeqeq`.

---

### **9. What are JavaScript operators?**

#### **Definition**

Symbols to perform operations (e.g., `+`, `&&`).

#### **Key Differences**

| Type       | Example  | Notes           |
| ---------- | -------- | --------------- | --- | -------------- |
| Arithmetic | `+`, `%` | Math operations |
| Logical    | `&&`, `  |                 | `   | Short-circuits |

#### **Use Cases**

- `??` (nullish coalescing) for fallbacks.

#### **Code Snippet**

```javascript
let name = user.name ?? "Anonymous";
```

#### **Best Practices**

- Know operator precedence.

---

### **10. What are template literals?**

#### **Definition**

Strings with embedded expressions (`` `Hello ${name}` ``).

#### **Key Differences**

| Feature   | Template Literals | Regular Strings |
| --------- | ----------------- | --------------- |
| Multiline | Yes               | No (use `\n`)   |

#### **Use Cases**

- Dynamic strings (e.g., URLs).

#### **Code Snippet**

```javascript
let greeting = `Hello, ${name}!`;
```

#### **Best Practices**

- Escape backticks with `\``.

---

### **11. How do you define a function in JavaScript?**

#### **Definition**

Functions are reusable blocks of code that can be defined with `function`, arrow syntax (`=>`), or as expressions.

#### **Key Differences**

| Type        | Syntax                      | Hoisting | `this` Binding |
| ----------- | --------------------------- | -------- | -------------- |
| Declaration | `function foo() {}`         | Yes      | Own `this`     |
| Expression  | `const foo = function() {}` | No       | Own `this`     |
| Arrow       | `const foo = () => {}`      | No       | Lexical `this` |

#### **Use Cases**

- **Arrow functions**: Short callbacks, lexical `this`.
- **Declarations**: When hoisting is needed.

#### **Code Snippet**

```javascript
// Function declaration
function greet(name) {
  return `Hello, ${name}!`;
}

// Arrow function
const greet = (name) => `Hello, ${name}!`;
```

#### **Best Practices**

- Use arrow functions for concise callbacks (e.g., `array.map(x => x * 2)`).

---

### **12. What is an arrow function?**

#### **Definition**

A concise function syntax (`=>`) with lexical `this` binding.

#### **Key Differences**

| Feature     | Arrow Function       | Regular Function |
| ----------- | -------------------- | ---------------- |
| `this`      | Inherits from parent | Own context      |
| `arguments` | No                   | Yes              |

#### **Use Cases**

- Event handlers (to avoid `bind`).
- Array methods (`map`, `filter`).

#### **Code Snippet**

```javascript
const add = (a, b) => a + b;
```

#### **Best Practices**

- Avoid arrow functions for object methods (they don’t bind `this`).

---

### **13. What is a callback function?**

#### **Definition**

A function passed as an argument to another function, executed later (e.g., async operations).

#### **Key Differences**

| Callback Type | Example                 | Use Case             |
| ------------- | ----------------------- | -------------------- |
| Synchronous   | `array.map(callback)`   | Transform data       |
| Asynchronous  | `fs.readFile(callback)` | Handle async results |

#### **Use Cases**

- Event listeners, AJAX calls, timers.

#### **Code Snippet**

```javascript
// Asynchronous callback
setTimeout(() => console.log("Done!"), 1000);
```

#### **Best Practices**

- Avoid "callback hell" with Promises/async-await.

---

### **14. What is a pure function?**

#### **Definition**

A function that always returns the same output for the same inputs and has no side effects.

#### **Key Differences**

| Pure Function   | Impure Function         |
| --------------- | ----------------------- |
| No side effects | Modifies external state |
| Predictable     | Unpredictable           |

#### **Use Cases**

- Redux reducers, utility functions.

#### **Code Snippet**

```javascript
// Pure
const add = (a, b) => a + b;

// Impure (modifies external state)
let total = 0;
const addToTotal = (x) => {
  total += x;
};
```

#### **Best Practices**

- Favor purity for easier testing/debugging.

---

### **15. What are default parameters?**

#### **Definition**

Fallback values assigned to function parameters if no argument is provided.

#### **Key Differences**

| Default Params | Old Workaround (              |     | )   |
| -------------- | ----------------------------- | --- | --- |
| Clean syntax   | Falsy values trigger fallback |

#### **Use Cases**

- Configurable functions with optional args.

#### **Code Snippet**

```javascript
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}
```

#### **Best Practices**

- Place defaults at the end of the parameter list.

---

### **16. What are conditional statements in JavaScript?**

#### **Definition**

Control flow structures (`if`, `else`, `switch`) to execute code based on conditions.

#### **Key Differences**

| Statement | Syntax                         | Best For              |
| --------- | ------------------------------ | --------------------- |
| `if/else` | `if (condition) { ... }`       | Complex conditions    |
| `switch`  | `switch (value) { case: ... }` | Multiple fixed values |

#### **Use Cases**

- `if/else`: Dynamic conditions.
- `switch`: Enums or fixed values.

#### **Code Snippet**

```javascript
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

#### **Best Practices**

- Use `===` in conditions to avoid coercion bugs.

---

### **17. What are loops in JavaScript?**

#### **Definition**

Constructs (`for`, `while`, `do-while`) to repeatedly execute code.

#### **Key Differences**

| Loop Type  | Syntax                        | Use Case           |
| ---------- | ----------------------------- | ------------------ |
| `for`      | `for (let i = 0; i < n; i++)` | Known iterations   |
| `for...of` | `for (const item of array)`   | Iterables (arrays) |

#### **Use Cases**

- `for...of`: Clean iteration over arrays.
- `while`: Unknown iteration count.

#### **Code Snippet**

```javascript
for (const num of [1, 2, 3]) {
  console.log(num); // 1, 2, 3
}
```

#### **Best Practices**

- Avoid `for...in` for arrays (it iterates over properties, not just indexes).

---

### **18. What is the `switch` statement?**

#### **Definition**

A conditional statement that matches a value against multiple `case` clauses.

#### **Key Differences**

| Feature     | `switch`            | `if/else` Chain    |
| ----------- | ------------------- | ------------------ |
| Readability | High for many cases | Low for many cases |
| Fallthrough | Requires `break`    | N/A                |

#### **Use Cases**

- Replacing long `if/else` chains with fixed values.

#### **Code Snippet**

```javascript
switch (day) {
  case "Monday":
    console.log("Start week");
    break;
  default:
    console.log("Other day");
}
```

#### **Best Practices**

- Always include a `default` case.

---

### **19. What is the `this` keyword?**

#### **Definition**

A reference to the execution context (object, global, or undefined in strict mode).

#### **Key Differences**

| Context        | `this` Value            | Example        |
| -------------- | ----------------------- | -------------- |
| Method         | Owner object            | `obj.method()` |
| Arrow Function | Lexical (parent `this`) | `() => this`   |

#### **Use Cases**

- Object methods, event handlers.

#### **Code Snippet**

```javascript
const person = {
  name: "Alice",
  greet: function () {
    console.log(this.name);
  }, // "Alice"
};
```

#### **Best Practices**

- Use arrow functions to preserve `this` in callbacks.

---

### **20. What is `use strict`?**

#### **Definition**

A directive enabling strict mode, which throws errors for unsafe actions (e.g., undeclared variables).

#### **Key Differences**

| Behavior        | Strict Mode | Non-Strict      |
| --------------- | ----------- | --------------- |
| Undeclared vars | Error       | Global variable |

#### **Use Cases**

- Modern JavaScript (enforced in ES modules).

#### **Code Snippet**

```javascript
"use strict";
x = 10; // Throws ReferenceError
```

#### **Best Practices**

- Always use strict mode to avoid silent errors.

---

### **21. How do you create an object in JavaScript?**

#### **Definition**

Objects are collections of key-value pairs created using literals `{}`, constructors, or `Object.create()`.

#### **Key Differences**

| Method      | Example                        | Prototype Chain    |
| ----------- | ------------------------------ | ------------------ |
| Literal     | `const obj = { key: "value" }` | `Object.prototype` |
| Constructor | `new Object()`                 | Custom prototype   |

#### **Use Cases**

- **Literal**: Simple objects.
- **Constructor**: Reusable object blueprints.

#### **Code Snippet**

```javascript
// Literal
const person = { name: "Alice", age: 25 };

// Constructor
function Person(name) {
  this.name = name;
}
const alice = new Person("Alice");
```

#### **Best Practices**

- Use literals for one-off objects.

---

### **22. How do you access object properties?**

#### **Definition**

Properties can be accessed via dot notation (`obj.key`) or bracket notation (`obj["key"]`).

#### **Key Differences**

| Notation | Example          | Dynamic Keys? |
| -------- | ---------------- | ------------- |
| Dot      | `person.name`    | No            |
| Bracket  | `person["name"]` | Yes           |

#### **Use Cases**

- **Bracket notation**: When keys are dynamic (e.g., variables).

#### **Code Snippet**

```javascript
const key = "name";
console.log(person[key]); // "Alice"
```

#### **Best Practices**

- Use dot notation for static keys (cleaner syntax).

---

### **23. What are array methods you commonly use?**

#### **Definition**

Built-in methods to manipulate arrays (`map`, `filter`, `reduce`, etc.).

#### **Key Differences**

| Method | Returns    | Mutates Original? |
| ------ | ---------- | ----------------- |
| `map`  | New array  | No                |
| `push` | New length | Yes               |

#### **Use Cases**

- `map`: Transform data.
- `filter`: Subset based on condition.

#### **Code Snippet**

```javascript
const doubled = [1, 2, 3].map((x) => x * 2); // [2, 4, 6]
```

#### **Best Practices**

- Chain methods (e.g., `filter` + `map`) for readability.

---

### **24. What is destructuring assignment?**

#### **Definition**

Unpack values from arrays/objects into variables concisely.

#### **Key Differences**

| Type   | Example                   |
| ------ | ------------------------- |
| Array  | `const [a, b] = [1, 2]`   |
| Object | `const { name } = person` |

#### **Use Cases**

- Extracting function parameters.

#### **Code Snippet**

```javascript
const { name, age } = person; // name="Alice", age=25
```

#### **Best Practices**

- Use aliases for conflicting names: `const { name: userName }`.

---

### **25. What is the spread operator?**

#### **Definition**

`...` expands iterables (arrays/objects) into individual elements.

#### **Key Differences**

| Use Case | Example                         |
| -------- | ------------------------------- |
| Copying  | `const arr2 = [...arr1]`        |
| Merging  | `const merged = { ...a, ...b }` |

#### **Code Snippet**

```javascript
const nums = [1, 2, ...[3, 4]]; // [1, 2, 3, 4]
```

#### **Best Practices**

- Prefer over `Object.assign()` for objects.

---

### **26. What is the rest parameter?**

#### **Definition**

`...` in functions collects remaining arguments into an array.

#### **Key Differences**

| Feature | Rest Params | `arguments` Object |
| ------- | ----------- | ------------------ |
| Type    | Array       | Array-like         |

#### **Use Cases**

- Variadic functions (e.g., `sum(...numbers)`).

#### **Code Snippet**

```javascript
function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}
```

#### **Best Practices**

- Always use rest params over `arguments`.

---

### **27. What are higher-order functions?**

#### **Definition**

Functions that take other functions as arguments or return them.

#### **Key Differences**

| Example    | Purpose                  |
| ---------- | ------------------------ |
| `map`      | Transform array          |
| `debounce` | Delay function execution |

#### **Use Cases**

- Callbacks, function composition.

#### **Code Snippet**

```javascript
const throttle = (fn, delay) => {
  /* ... */
};
```

#### **Best Practices**

- Name callback parameters descriptively (e.g., `user => user.name`).

---

### **28. What are `map`, `filter`, and `reduce`?**

#### **Definition**

Array methods for transformation (`map`), filtering (`filter`), and accumulation (`reduce`).

#### **Key Differences**

| Method   | Returns      | Callback Signature   |
| -------- | ------------ | -------------------- |
| `map`    | New array    | `(item) => newValue` |
| `reduce` | Single value | `(acc, item) => acc` |

#### **Use Cases**

- `reduce`: Flatten arrays, aggregate data.

#### **Code Snippet**

```javascript
const total = [1, 2, 3].reduce((sum, num) => sum + num, 0); // 6
```

#### **Best Practices**

- Always provide an initial value for `reduce`.

---

### **29. What are `find`, `some`, and `every`?**

#### **Definition**

Array methods for searching (`find`) and testing (`some`, `every`).

#### **Key Differences**

| Method  | Returns     | Stops Early? |
| ------- | ----------- | ------------ |
| `find`  | First match | Yes          |
| `every` | Boolean     | Yes          |

#### **Use Cases**

- `some`: Check if any item passes a test.

#### **Code Snippet**

```javascript
const hasAdult = users.some((user) => user.age >= 18);
```

#### **Best Practices**

- Use `find` instead of `filter()[0]` for performance.

---

### **30. What is object destructuring?**

#### **Definition**

Unpacking object properties into variables.

#### **Key Differences**

| Feature  | Example                       |
| -------- | ----------------------------- |
| Aliasing | `const { name: userName }`    |
| Defaults | `const { age = 25 } = person` |

#### **Use Cases**

- Extracting multiple properties cleanly.

#### **Code Snippet**

```javascript
const { name, ...rest } = person;
```

#### **Best Practices**

- Use with function parameters: `function greet({ name })`.

---

### **31. What is JSON?**

#### **Definition**

A lightweight data interchange format (subset of JavaScript objects).

#### **Key Differences**

| Feature   | JSON        | JS Object |
| --------- | ----------- | --------- |
| Quotes    | Double only | Any       |
| Functions | Not allowed | Allowed   |

#### **Use Cases**

- APIs, configuration files.

#### **Code Snippet**

```javascript
const json = '{"name":"Alice"}';
const obj = JSON.parse(json);
```

#### **Best Practices**

- Validate JSON with `try/catch` when parsing.

---

### **32. What is ECMAScript?**

#### **Definition**

The standard JavaScript is based on (ES6 = ES2015, etc.).

#### **Key Differences**

| Version | Year | Key Features         |
| ------- | ---- | -------------------- |
| ES5     | 2009 | `strict mode`        |
| ES6     | 2015 | `let/const`, classes |

#### **Use Cases**

- Modern browsers support ES6+.

#### **Best Practices**

- Use Babel for backward compatibility.

---

### **33. Difference: JavaScript vs. ECMAScript**

#### **Definition**

- **ECMAScript**: The language standard.
- **JavaScript**: The implementation (includes DOM APIs).

#### **Key Differences**

| Aspect | ECMAScript    | JavaScript      |
| ------ | ------------- | --------------- |
| Scope  | Core language | Core + Web APIs |

---

### **34. Key ES6 Features**

#### **Definition**

Major updates: `let/const`, arrow functions, classes, modules, promises.

#### **Code Snippet**

```javascript
// Modules
import { module } from "./module.js";
```

#### **Best Practices**

- Prefer `const` over `let` where possible.

---

### **35. What are classes in ES6?**

#### **Definition**

Syntactic sugar over JavaScript's prototypal inheritance for cleaner OOP.

#### **Key Differences**

| Feature     | ES6 Class       | Prototype Equivalent   |
| ----------- | --------------- | ---------------------- |
| Syntax      | `class` keyword | `function + prototype` |
| Inheritance | `extends`       | `Object.create()`      |

#### **Use Cases**

- Building complex UI components (React/Angular)
- Modeling domain objects

#### **Code Snippet**

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello, ${this.name}!`;
  }
}
```

#### **Best Practices**

- Use class fields for cleaner property initialization
- Private fields (#) for encapsulation

---

### **36. What are modules in ES6?**

#### **Definition**

A standardized way to organize code into reusable, encapsulated units.

#### **Key Differences**

| Module System | Syntax                   | Features        |
| ------------- | ------------------------ | --------------- |
| ES Modules    | `import/export`          | Static analysis |
| CommonJS      | `require/module.exports` | Dynamic loading |

#### **Use Cases**

- Component libraries
- Large-scale application architecture

#### **Code Snippet**

```javascript
// math.js
export const add = (a, b) => a + b;

// app.js
import { add } from "./math.js";
```

#### **Best Practices**

- Prefer named exports for tree-shaking
- Use default exports for single-purpose modules

---

### **37. What are promises?**

#### **Definition**

Objects representing the eventual completion (or failure) of an async operation.

#### **Key Differences**

| Feature        | Promises          | Callbacks        |
| -------------- | ----------------- | ---------------- |
| Chaining       | `.then().catch()` | Nested functions |
| Error Handling | Centralized       | Manual checks    |

#### **Use Cases**

- API requests
- File I/O operations

#### **Code Snippet**

```javascript
fetch("api/data")
  .then((response) => response.json())
  .catch((error) => console.error(error));
```

#### **Best Practices**

- Always return promises in chain
- Use async/await for readability

---

### **38. What are async/await?**

#### **Definition**

Syntactic sugar over promises for writing asynchronous code that looks synchronous.

#### **Key Differences**

| Feature        | Async/Await | Promises |
| -------------- | ----------- | -------- |
| Readability    | Higher      | Lower    |
| Error Handling | try/catch   | .catch() |

#### **Use Cases**

- Sequential async operations
- Complex async logic

#### **Code Snippet**

```javascript
async function fetchData() {
  try {
    const response = await fetch("api/data");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
```

#### **Best Practices**

- Use in async functions only
- Avoid excessive sequential awaits

---

### **39. What are generators?**

#### **Definition**

Functions that can be paused and resumed, yielding multiple values.

#### **Key Differences**

| Feature   | Generators      | Regular Functions |
| --------- | --------------- | ----------------- |
| Execution | Pausable        | Run to completion |
| Return    | Multiple values | Single value      |

#### **Use Cases**

- Lazy evaluation
- Infinite sequences
- Custom iterators

#### **Code Snippet**

```javascript
function* idGenerator() {
  let id = 1;
  while (true) {
    yield id++;
  }
}

const gen = idGenerator();
console.log(gen.next().value); // 1
```

#### **Best Practices**

- Use for memory-efficient iteration
- Implement custom iteration protocols

---

### **40. What are symbols?**

#### **Definition**

Unique and immutable primitive values used as object property identifiers.

#### **Key Differences**

| Feature     | Symbol                    | String Key          |
| ----------- | ------------------------- | ------------------- |
| Uniqueness  | Guaranteed                | Duplicates possible |
| Enumeration | Non-enumerable by default | Enumerable          |

#### **Use Cases**

- Creating private-like properties
- Preventing property collisions

#### **Code Snippet**

```javascript
const PRIVATE_KEY = Symbol("private");
const obj = {
  [PRIVATE_KEY]: "secret",
};
```

#### **Best Practices**

- Use for metadata properties
- Register global symbols for cross-realm use

---

### **41. What are sets and maps?**

#### **Definition**

Collection types for unique values (Set) and key-value pairs (Map).

#### **Key Differences**

| Collection | Key Feature   | Use Case            |
| ---------- | ------------- | ------------------- |
| Set        | Unique values | Deduplication       |
| Map        | Any key type  | Object alternatives |

#### **Code Snippet**

```javascript
const unique = new Set([1, 2, 2, 3]); // {1, 2, 3}
const map = new Map();
map.set("key", "value");
```

#### **Best Practices**

- Use Map over Object when keys are unknown until runtime
- Use Set for efficient membership tests

---

### **42. What is TypeScript?**

#### **Definition**

A typed superset of JavaScript that compiles to plain JavaScript.

#### **Key Differences**

| Feature | TypeScript | JavaScript |
| ------- | ---------- | ---------- |
| Typing  | Static     | Dynamic    |
| Tooling | Advanced   | Basic      |

#### **Use Cases**

- Large codebases
- Team projects

#### **Code Snippet**

```typescript
interface User {
  name: string;
  age: number;
}

function greet(user: User): string {
  return `Hello, ${user.name}!`;
}
```

#### **Best Practices**

- Gradual adoption
- Use strict mode

---

### **43. Difference: TypeScript vs. JavaScript**

#### **Definition**

TypeScript adds static typing and tooling to JavaScript.

#### **Key Differences**

| Aspect         | TypeScript   | JavaScript |
| -------------- | ------------ | ---------- |
| Compilation    | Required     | Optional   |
| Error Checking | Compile-time | Runtime    |

#### **Best Practices**

- Use TS for complex projects
- JS for simple scripts

---

### **44. Difference: TypeScript vs. ECMAScript**

#### **Definition**

TypeScript extends ECMAScript with types and future features.

#### **Key Differences**

| Aspect   | TypeScript       | ECMAScript    |
| -------- | ---------------- | ------------- |
| Features | Additional types | Core language |
| Adoption | Optional         | Standard      |

---

### **45. How do you install TypeScript?**

#### **Definition**

Install via npm for project or global use.

#### **Code Snippet**

```bash
npm install -g typescript  # Global
npm install --save-dev typescript  # Project
```

#### **Best Practices**

- Prefer project-local installation
- Use npx for one-off compilations

---

### **46. What are TypeScript's basic types?**

#### **Definition**

Core types: `number`, `string`, `boolean`, `array`, `tuple`, `enum`, `any`, etc.

#### **Code Snippet**

```typescript
let age: number = 30;
let names: string[] = ["Alice", "Bob"];
```

#### **Best Practices**

- Avoid `any` when possible
- Use union types for flexibility

---

### **47. What is type inference?**

#### **Definition**

TypeScript's ability to automatically determine types.

#### **Use Cases**

- Reducing verbosity
- Maintaining type safety

#### **Code Snippet**

```typescript
let x = 10; // Inferred as number
```

#### **Best Practices**

- Let TypeScript infer when obvious
- Explicitly type function returns

---

### **48. What are interfaces?**

#### **Definition**

Contracts defining object shapes.

#### **Code Snippet**

```typescript
interface Point {
  x: number;
  y: number;
}
```

#### **Best Practices**

- Use for public APIs
- Extend interfaces for composition

---

### **49. What are enums?**

#### **Definition**

Named constants for better readability.

#### **Code Snippet**

```typescript
enum Direction {
  Up = "UP",
  Down = "DOWN",
}
```

#### **Best Practices**

- Use string enums for serialization
- Const enums for performance

---

### **50. What are tuples?**

#### **Definition**

Fixed-length arrays with typed elements.

#### **Code Snippet**

```typescript
let coordinates: [number, number] = [10, 20];
```

#### **Best Practices**

- Use for known-length sequences
- Prefer objects for complex data

---

### **51. What is type assertion?**

#### **Definition**

Telling TypeScript the type of a value.

#### **Code Snippet**

```typescript
const input = document.getElementById("input") as HTMLInputElement;
```

#### **Best Practices**

- Avoid excessive assertions
- Prefer type guards

---

### **52. What is the event loop?**

#### **Definition**

JavaScript's concurrency model handling async operations.

#### **Key Concepts**

- Call stack
- Task queue
- Microtask queue

#### **Best Practices**

- Avoid blocking the main thread
- Use web workers for CPU-intensive tasks

---

### **53. What is closure?**

#### **Definition**

A function retaining access to its lexical scope.

#### **Code Snippet**

```javascript
function createCounter() {
  let count = 0;
  return () => ++count;
}
```

#### **Best Practices**

- Use for data privacy
- Avoid memory leaks

---

### **54. What is prototypal inheritance?**

#### **Definition**

Object inheritance via prototype chains.

#### **Code Snippet**

```javascript
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  console.log(`${this.name} makes a noise`);
};
```

#### **Best Practices**

- Prefer class syntax in modern code
- Understand for debugging

---

### **55. Difference: call, apply, bind**

#### **Definition**

Ways to set `this` context in functions.

#### **Key Differences**

| Method | Invocation       | Parameters      |
| ------ | ---------------- | --------------- |
| call   | Immediate        | Comma-separated |
| apply  | Immediate        | Array           |
| bind   | Returns function | Comma-separated |

#### **Best Practices**

- Use arrow functions to avoid context issues

---

### **56. What is memoization?**

#### **Definition**

Caching function results for same inputs.

#### **Code Snippet**

```javascript
const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    return cache.has(key)
      ? cache.get(key)
      : (cache.set(key, fn(...args)), cache.get(key));
  };
};
```

#### **Best Practices**

- Use for expensive computations
- Clear cache when appropriate

---

### **57. What is currying?**

#### **Definition**

Transforming a multi-argument function into a sequence of single-argument functions.

#### **Code Snippet**

```javascript
const multiply = (a) => (b) => a * b;
const double = multiply(2);
```

#### **Best Practices**

- Use for function specialization
- Avoid excessive nesting

---

### **58. What is a factory function?**

#### **Definition**

A function that returns new objects.

#### **Code Snippet**

```javascript
function createUser(name) {
  return {
    name,
    greet() {
      return `Hello, ${this.name}!`;
    },
  };
}
```

#### **Best Practices**

- Use for flexible object creation
- Combine with closures for encapsulation

---

### **59. What is a constructor function?**

#### **Definition**

A function used with `new` to create objects.

#### **Code Snippet**

```javascript
function User(name) {
  this.name = name;
}
User.prototype.greet = function () {
  return `Hello, ${this.name}!`;
};
```

#### **Best Practices**

- Capitalize constructor names
- Prefer class syntax

---

### **60. What is the Module Pattern?**

#### **Definition**

Encapsulation using IIFEs and closures.

#### **Code Snippet**

```javascript
const counter = (() => {
  let count = 0;
  return {
    increment() {
      return ++count;
    },
  };
})();
```

#### **Best Practices**

- Use for simple state management
- Modern alternative: ES modules

---

### **61. What is the Revealing Module Pattern?**

#### **Definition**

A variant that explicitly exposes public members.

#### **Code Snippet**

```javascript
const counter = (() => {
  let count = 0;
  const increment = () => ++count;
  return { increment };
})();
```

#### **Best Practices**

- Clearer public API
- Easier refactoring

---

### **62. How does JavaScript handle memory management?**

#### **Definition**

Automatic garbage collection via mark-and-sweep.

#### **Key Concepts**

- Reference counting
- Memory leaks
- WeakMap/WeakSet

#### **Best Practices**

- Avoid global variables
- Clean up event listeners

---

### **63. What are microtasks and macrotasks?**

#### **Definition**

Different queues in the event loop.

#### **Key Differences**

| Type      | Examples   | Priority |
| --------- | ---------- | -------- |
| Microtask | Promises   | Higher   |
| Macrotask | setTimeout | Lower    |

#### **Best Practices**

- Understand for async flow control
- Avoid starvation

---

### **64. Difference: setTimeout vs setImmediate**

#### **Definition**

Timing of execution in Node.js event loop.

#### **Key Differences**

| Method       | Execution Timing |
| ------------ | ---------------- |
| setTimeout   | Next tick        |
| setImmediate | Current tick end |

#### **Best Practices**

- Prefer setImmediate in Node.js
- Use promises for microtasks

---

### **65. Difference: for...of vs for...in**

#### **Definition**

Iteration over values vs properties.

#### **Key Differences**

| Loop     | Iterates Over    | Best For          |
| -------- | ---------------- | ----------------- |
| for...of | Values           | Arrays, iterables |
| for...in | Enumerable props | Object inspection |

#### **Best Practices**

- Use Object.keys() with for...of for objects
- Avoid for...in with arrays

---

### **66. Latest ECMAScript Features**

#### **Recent Additions**

- Top-level await
- Private class fields
- Pattern matching (proposal)

#### **Best Practices**

- Check compatibility tables
- Use polyfills when needed

---

### **67. Differences Between Set and Map**

#### **Key Differences**

| Collection | Stores          | Key Features |
| ---------- | --------------- | ------------ |
| Set        | Unique values   | Value-based  |
| Map        | Key-value pairs | Any key type |

#### **Best Practices**

- Use Set for uniqueness
- Use Map for key-value storage with non-string keys

---
