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

---

## Advanced Array Tricks

### 1. ```reduce()``` - The Swiss Army Knife
- Use when you want ONE result from MANY values

#### Sum
```
const total = [1, 2, 3, 4].reduce(
    (sum, n) => sum + n,
    0
);

```
**How it works**
- `initialValue = 0` (sum starts at 0)
- Iteration 1: `sum = 0, n = 1` -> 0 + 1 = 1
- Iteration 2: `sum = 1, n = 2` -> 1 + 2 = 3
- Iteration 3: `sum = 3, n = 3` -> 3 + 3 = 6
- Iteration 4: `sum = 6, n = 4` -> 6 + 4 = 10
- Result: `total = 10`

#### Count
```
const words = ["a", "b", "a", "c"];

const count = words.reduce<Record<string, number>>((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
}, {});
```
**Breakdown:**
- `initialValue = {}` (empty object)
- ```Record<string, number>``` is a TypeScript type annotation (object with string keys and number values)
- ```acc[word || 0]``` uses short-circuit evaluation: if ```acc[word]``` doesn't exist, use 0

**Step-by-step execution:**
1. `acc = {}, word = "a"` -> `acc["a"] = (undefined || 0) + 1 = 1` -> `{a: 1}`
2. `acc = {a: 1}, word = "b"` -> `acc["b"] = (undefined || 0) + 1 = 1` -> `{a: 1, b: 1}`
3. `acc = {a: 1, b: 1}, word = "a"` -> `acc["a"] = (1 || 0) + 1 = 2` -> `{a: 2, b: 1}`
4. `acc = {a: 2, b: 1}, word = "c"` -> `acc["c"] = (undefined || 0) + 1 = 1` -> `{a: 2, b: 1, c: 1}`

Result: `{a: 2, b: 1, c: 1}`

### 2. Remove Duplicates (Pro Way)
#### Using `Set`
```
const nums = [1, 2, 2, 3, 3];
const unique = [...new Set(nums)];
// Result: [1, 2, 3]
```
**How it works:**
1. `new Set(nums)` creates a Set from the array
    - A Set automatically removes duplicates (it only stores unique values)
    - `Set {1, 2, 3}` (the second 2 and 3 are ignored)
2. `[...new Set(nums)] uses the spread operator to convert the Set back to an array
    - Equivalent to `Array.from(new Set(nums))`

