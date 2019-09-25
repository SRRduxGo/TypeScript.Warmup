/**
 * when a function returns something which will be inferred as ANY type
 */
const json = `{"x":10,"y":20}`;
/**
 * the obj below is inferred as `any` type because JSON.parse return value is
 * inferred as `any` type , why because it parses an arbitrary string to a valid JS value
 * and Statically analyzing the passed `string` to guess the `type` can be a very hard problem
 * It can be any value type after the parsing - hence ANY
 */
const obj = JSON.parse(json);
/**
 * The line below doesn't generate an error
 * because obj was inferred as ANY type and TS has no clue
 * about the obj's internal structure
 *
 * REMEMBER STATIC ANALYSIS
 */
const y = obj.smxns;
console.log(json);

/** with annotations so to help TS */
const cords: { x: number; y: number } = JSON.parse(json);
cords.d; // <-- showing the flag now
/***
 * _^^^^^_
 * Please note the above type annotations doesn't guarantee
 * RUN-TIME properties but COMPILE-TIME property detection
 **/

/**
 * We have to be clear about the usage of a variable
 * so TS could infer what type it is
 * Declaration and USAGE/ASSIGNMENT should not have DISTANCE BETWEEN THEM
 */

let words = ["green", "spleen"];
let Found; // inferred type is any

for (let item of words) {
  if (item === "green") {
    Found = true;
    break;
  }
}

/**
 * If we annotate the same code
 */
let words_ = ["green", "spleen"];
let Found_: boolean; // annotated type type is any

for (let item of words_) {
  if (item === "green") {
    Found_ = true; //annotated type
    break;
  }
}

/**
 * Annotating a variable which could contain two different types of values
 * depending on where the program flow is
 */
// var numberFound = false;
var numberFound: boolean | number = false;
if (true) {
  numberFound = 10;
}

/**
 * letting TS infer the function type
 * It can only infer the RETURN TYPE but not the type of the
 * arguments which were passed through the function
 */
function foo(x, y) {
  let d = x + 24;
  return 23;
}

/**
 * TS compiler goes through the code and check reachable
 * return statements to infer the return type
 *  in this case `boolean | string`
 */
function ifConfused() {
  let x = 0;
  if (x) {
    return true;
  }
  return "i am confused";
}

/***
 * Annotate the function or the variable
 */
let add: (a: number, b: number) => string;
add = 10;
add = "defcon";
add = function() {};
add = function(x, y) {
  return 20;
};
/**BUT this works*/
add = function(x: number, y: number) {
  return "kilmanjaro";
};
add = function(x: number, y: number) {
  let xts = Date();
  if (xts) {
    return "kilmanjaro";
  }
};

/***
 * Annotating the function now
 * and lets do an experiment ;)
 */
function bared(x: number, y: string): number {
  return NaN;
  /**
   * this works because
   * typeof NaN is "number"
   *
   * */
}

/** annotating arrow function
 * as same as annotating the normal function
 */
let arr = (x: number, y: number): number => {
  return 10;
};

/**
 * Annotating for undefined / null
 */
function logged(x: number, y: number): void {
  return window["time"] === 0 ? null : undefined;
}

/**if throwing exception for sure */
function throwable(x: void): never | void | "kimardashian" {
  throw new Error();
}

/**
 * above the return type is compound-type
 * never | void | string
 *
 * you can replace the type literal with a value of that type to
 * inform TS what you mean
 */
