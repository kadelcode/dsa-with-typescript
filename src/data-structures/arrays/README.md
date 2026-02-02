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

---

## Looping Through Arrays
### for loop
```
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

### for...of loop (cleaner) 
```
for (const fruit of fruits) {
    console.log(fruit);
}
```

---

## Common Array Methods
### map - transform elements
```
[1, 2, 3].map(n => n * 2);
// [2, 4, 6]
```

### filter - select elements
```
[1, 2, 3, 4].filter(n => n % 2 === 0);
// [2, 4]
```

### find - first matching element
```
[10, 20, 30].find(n => n > 15);
// 20
```

---

## Array Length
```
fruits.length;
```
- `length` gives the total number of elements
- it is **not** the last index

---

## Readonly Arrays
Readonly arrays cannot be modified.
```
const ids: readonly number[] = [1, 2, 3];
// ids.push(4); Error occurs
```

---

## Common Mistakes
```
fruits[10]; // undefined (index out of range)
```

```
const a = [];
const b = [];
a === b; // false (reference comparison)
```
