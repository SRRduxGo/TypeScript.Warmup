/**
 * Remember it is static analysis
 */
const age: number = true;
age = 10;

let ega: number = 20 + "32";
ega = 30;

let null_: null = 20;
let undefined_: undefined = 0;

// allowed by the ts compiler
let undefined__: undefined = null;

let dte: Date = new Date();
let dte_: Date = Date.now();

//Array
let nums: number[] = [1, 2, 3, "hello"];

let nums_: number[] = [];
nums_.push(23);
nums.push("peg"); // strong type inference system using annotations from the earlier code

//classes
class Cab {}
let cab: Cab = new Date(); // not inferred properly
cab = new Cab();

/**
 * statically analysed to get the
 * object literal | on the fly Interface | anonymous Interface or immediately applied Interface oO)!
 */
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
  d: 30
};

point.c = 32;
point.x = {};

/***
 * function annotation.
 * again statically analysed by the compiler and the compiler only looks for type mismatch if any
 * any type errors with the static code
 */

const fn: (i: number) => void = (i: number) => {};

/***
 * doing the same thing while using an interface
 */

// interface Foo (i:number) => void;
// - !!! not allowed in case of functions to declare a  type for a function

/** type inference */
let bar = 20;
bar = "kim";

/** declaration and assignment on different lines then type
 * inferred is `any`
 */
let bak;
bak = 32;
