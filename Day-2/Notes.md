How TypeScript Works (Compiler Flow Notes)

1️⃣ TS Code

Developer jo .ts file likhta hai

Example: variables, functions, interfaces, types
-----------------------------------------

2️⃣ Lexer (Lexical Analysis)

TS code ko tokens me tod deta hai

Tokens = keywords, variables, operators, symbols

-----------------------------------------

3️⃣ Parser

Tokens ko mila kar AST (Abstract Syntax Tree) banata hai

AST ek tree structure hota hai jo code ka logical structure dikhata hai

Agar syntax galat hai → error yahin mil jata hai

-----------------------------------------

4️⃣ Binder

Variables, functions, classes ko connect karta hai

Yahin pe bante hain:

Symbol Tables

Parent Pointer

Flow Nodes

Matlab: kaunsa variable kahan declared hai, kaunsa scope belong karta hai

-----------------------------------------

5️⃣ Checker (Type Checker ❤️)

Sabse important part

Yahin pe type checking hoti hai

Check karta hai:

Type mismatch

Invalid operations

Function arguments sahi hain ya nahi

-----------------------------------------

6️⃣ Syntax Check & Short Circuit

Errors milte hi compilation rok di jaati hai

Isse runtime crash se bachav hota hai

-----------------------------------------

7️⃣ Emitter

Last step

TypeScript code ko JavaScript me convert karta hai

Generate hoti hain:

.js → runnable file

.d.ts → type definition file

.map → source map (debugging ke liye)