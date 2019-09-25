const strs: string[] = ["work", "kwrl", "20"];

const strX: string[][] = [strs, strs];

const emptySTRX: string[][] = [];

// TS here doesn't allow you to push inconsistent type value
//emptySTRX.push("hellow");
emptySTRX.push(["kilmanjaro"]);

/**
 * TS does inference consistent with the array we operate on
 * HOVER on the variable to check the type
 */
let vall = strs.pop();
let valium = strX.pop();
let duplX = strX;

/**
 * TS support on map, reduce etc
 * HOVER on the variable to check the inferred type
 */

var mappedArr = strs.map(item => {
  return 1;
});

/**
 * Raises an error - if once assigned a type at a given line cannot change it in the upcoming lines
 */
mappedArr = strX.map((item: string[]): string[] => {
  return item;
});

console.log(strX.length);
console.log(mappedArr);

// flexi array - hover and check the type
const flexi = [10, "help"];
const flexi_: (string | number)[] = [10, ""];
