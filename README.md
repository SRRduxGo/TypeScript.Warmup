# TypeScript.Warmup

- Warming up on TypeScript

## Premise

- Writing TypeScript is the same as writing JS with Extra-Documentation
- TypeScript doesn't decide on how our code would get executed in the Browser

## what is a Type

- Type, in fancy language, defines a `constraint` on a value that a given variable can hold
- This `constraint` can be thought of set of rules
- these `rules` can mean anything valid in JS world, like what all `properties + methods` a `value` (Object) can have
- helps in knowing what set of value-types are flowing around in program flow

## Kinds of constraints OR types

- string
- number
- boolean
- Date
- Todo

## Types ..formally

- **Primitive Types**
  - _number_
  - _boolean_
  - _string_
  - _undefined_
  - _null_
  - _void_
  - _symbol_
- **Object Types**
  - _functions_
  - _arrays_
  - _classes_
  - _objects_

## Type Annotations and Type inferences

### Type Annotations

- Code we add to tell TS what type of value a variable `will` refer to

### Type Inference

- Ts tries to figure out what type of value a variable `refers` to

- _`As applied to Variables`_
  - _if the Variable `declaration and initialization` are `on the same line` TS will mark the type of that variable just by looking at the value it was assigned_
- _`As applied to Functions`_
  - _TS tries to figure out the return type only_
- _`As applied to Objects`_

### Type Annotations - when they are useful

- when we declare the variable in one line and the initialize it later
- when we want a variable to have a type that can't be inferred
- when a function returns the `any` type and we need to clarify the value

### Annotating and Inferring is an ART and CAN CONFUSE YOU!

- Because it is very PATTERN-Y and dealing with the same pattern of typing and annotation over and over again can get you stuck into an AUTO_PILOT way of looking at the code

## ARRAY

- TS can do type inference while extracting value from an array
- TS can prevent us from adding in-compatible values to an array
- TS supports Type inference on inBuilt Array methods and their return types

## Interfaces and Classes

- Creates a new Type - used on Object type variables
- constrains the properties and their value types, the object the given variable can hold
- We can program to Interface - in a convenient manner
