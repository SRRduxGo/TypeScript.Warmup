var strs = ["work", "kwrl", "20"];
var strX = [strs, strs];
var emptySTRX = [];
// TS here doesn't allow you to push inconsistent type value
//emptySTRX.push("hellow");
emptySTRX.push(["kilmanjaro"]);
/**
 * TS does inference consistent with the array we operate on
 * HOVER on the variable to check the type
 */
var vall = strs.pop();
var valium = strX.pop();
var duplX = strX;
/**
 * TS support on map, reduce etc
 * HOVER on the variable to check the inferred type
 */
var mappedArr = strs.map(function(item) {
  return 1;
});
/**
 * BUT HERE TS doesn't raise an error
 * if we ts-node it - we are using the same variable
 */
mappedArr = strX.map(function(item) {
  return 1;
});
console.log(strX.length);
console.log(mappedArr);
