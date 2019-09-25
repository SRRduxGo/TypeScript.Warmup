/**
 * Rather than defining an interface
 * we define it right next to the argument
 */
let hgh = {
  dte: new Date(),
  name: "hick-maz"
};
/** TO */
let hgh_: {
  dte: Date;
  name: string;
} = {
  dte: new Date(),
  name: "hick-maz"
};
/** TS forbids this assignment */
hgh_ = {
  dte: true,
  name: 10
};

/**
 * NOW lets fix a function
 *
 */
function himler(obj: { dte: Date; name: string }): "kim" {
  return "kiml";
  /**
   * As you can see function should always return the value "kim"
   */
}

function himler_(obj: { dte: Date; name: string }): string {
  return "kiml";
}

/**
 * De-structured arguments
 */

 /**
  * 
  * This will not work because it is valid syntactical form of destructuring
  */
function himler__({ dte: dte : Date, name: string }): string {
  return "any";
}
/**vlaid way of  type annotating */
function himler__x({ dte,name }:{dte:Date;name:string;}): string {
    return "any";
  }
