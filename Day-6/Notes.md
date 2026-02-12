# 📘 Day 6 — Type Narrowing & Type Guards in TypeScript

## 🚀 Overview

In this section, I learned how TypeScript identifies the actual type from multiple possible types using **Type Narrowing** and **Type Guards**.
This helps in writing safe and predictable code when working with union types.

---

## 🔹 What is Type Narrowing?

Type Narrowing is the process where TypeScript determines a more specific type from a union type using conditions.

It helps:

* Prevent runtime errors
* Perform safe operations
* Improve code reliability

---

## 🛡️ Type Guards

Type Guards are conditions that help TypeScript determine the correct type.

### Common Type Guards:

* `typeof`
* `if / else` conditions
* `switch` statements
* `in` operator

---

## 🔍 Type Guard using `typeof`

```ts
function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase())
  } else {
    console.log(value.toFixed(2))
  }
}
```

👉 TypeScript automatically detects the correct type based on condition.

---

## 🍵 Real Life Example — Chai Order System

This example demonstrates **Discriminated Unions** and type narrowing using a `switch` statement.

### 🧩 Type Definitions

```ts
type MasalaChai = { type: "masala"; spicelevel: number }
type GingerChai = { type: "ginger"; amount: number }
type ElaichiChai = { type: "Elaichi"; aroma: number }

type Chai = MasalaChai | GingerChai | ElaichiChai
```

👉 Each chai has different properties but shares a common `type` field.

---

### 🔄 Type Narrowing using `switch`

```ts
function makeChai(order: Chai) {
  switch (order.type) {
    case "masala":
      return `Masala chai with spice level ${order.spicelevel}`

    case "Elaichi":
      return `Elaichi chai with aroma ${order.aroma}`

    case "ginger":
      return `Ginger chai with amount ${order.amount}`
  }
}
```

### How it works:

* TypeScript checks `order.type`
* Narrows the type automatically
* Allows safe property access

---

## ⭐ Discriminated Union

A pattern where multiple types share a common property (like `type`) to help TypeScript identify the correct type.

Benefits:

* Safe property access
* Better readability
* Common in APIs and React state management

---

## 🧠 Key Takeaway

> Type Narrowing allows TypeScript to identify the correct type from union types using conditions, ensuring type safety and preventing runtime errors.

---

✅ **Status:** Completed Day 6 — Type Narrowing & Type Guards
