# Arrays in TypeScript

Arrays are one of the most fundamental data structures in programming.
They allow you to store, access, and manipulate multiple values using a single variable.

This README covers:
- array basics
- common operations, and
- interview-ready concepts

---

## What is an Array?

An **array** is an ordered collection of values stored under one variable name.
Each value is accessed using an **index**, starting from `0`.

```ts
const fruits = ["apple", "banana", "orange"];
```

---

## Indexing Rules
- Arrays are zero-indexed
- First element => index `0`
- Last index => `length - 1`

```ts
fruits[0]; // "apple"
fruits.length; // 3
```

---

## Declaring Arrays in TypeScript
### Using square brackets (recommended)
```
let numbers: number[] = [1, 2, 3];
```

### Using generics
```
let names: Array<string> = ["Ada", "John"];
```

---

## Arrays with Multiples Types
Use union types when an array can contain more than one type.
```
let data: (string | number)[] = ["age", 25];
```

---

## Adding Elements
```
fruits.push("mango");    // add to end
fruits.unshift("grape"); // add to start
```

---

## Removing Elements
```
fruits.pop()     // remove last element
fruits.shift(); //  remove first element
``` 