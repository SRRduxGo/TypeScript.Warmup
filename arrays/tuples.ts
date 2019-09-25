const bottle = {
  volume: 500,
  color: "green",
  height: "15cm"
};

/**
 * Tuple kind of DS is not supported in JS but TS can force a Tuple like behaviour from
 * the code
 */

/**Type alias */
type Bottle = [number, string, string];

const OneBottle_tuple: [number, string, string] = [500, "green", "15cm"];
const tpl: Bottle = [20, "", ""];
