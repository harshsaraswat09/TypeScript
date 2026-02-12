## Unions & Any

# 📘 Day 5 — Unions & `any` in TypeScript

## 🚀 Overview

In this section, I learned how TypeScript allows multiple types using **Union Types** and why the **`any` type** should be avoided due to loss of type safety.

---

## 🔹 Union Types (`|`)

Union types allow a variable to store **more than one type of value** safely.

### ✅ Syntax

```ts
let variable: type1 | type2
```

### ✅ Example

```ts
let id: number | string

id = 101      // ✅ valid
id = "A101"   // ✅ valid
id = true     // ❌ error
```

### 💡 Why use Union Types?

* Provides flexibility with type safety
* Common in API responses, form inputs, and dynamic values
* Prevents invalid data assignments

---

## 🔹 `any` Type

The `any` type disables TypeScript's type checking.

### ✅ Example

```ts
let data: any

data = 10
data = "hello"
data = true
```

### ❌ Why `any` is Dangerous

* No type safety
* Runtime errors possible
* Removes TypeScript benefits

```ts
let value: any = 10
value.toUpperCase() // ❌ runtime error
```

👉 Avoid using `any` whenever possible.

---

## ⚖️ Union vs `any`

| Feature        | Union Type | any      |
| -------------- | ---------- | -------- |
| Type Safety    | ✅ Yes      | ❌ No     |
| Allowed Values | Limited    | Anything |
| Recommended    | ✅ Yes      | ⚠️ Avoid |

---

## 🧪 Practice — Mixed Type Variables

### Example 1

```ts
let score: number | string

score = 100
score = "hundred"
```

### Example 2

```ts
let isActive: boolean | number

isActive = true
isActive = 1
```

### Example 3

```ts
let userData: any

userData = "Harsh"
userData = 21
userData = { city: "Bhopal" }
```

---

## 🧠 Key Takeaway

> Union types allow multiple safe types, while `any` removes type safety and should be avoided.

---

