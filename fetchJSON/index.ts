import axios from "axios";
const url = "http://jsonplaceholder.typicode.com/todos/1";

/**
 * Interfaces are used to define the structure of an object
 * OR IN OTHER WORDS
 *
 * SAVE YOU FROM INFLICTING ANY TYPOS
 */
/**
 * if you look deeper applying interface on an object
 * means compiler has to introduce some extra JS code
 * to check if the given object complies with the rules laid down
 * by the interface
 *
 * extra code added to your code base - how test the extra
 *
 * NO - NO EXTRA CODE ADDED _ ONLY STATIC ANALYSIS IS DONE BEFORE COMPILATION
 * NOT DYNAMIC
 *
 * THIS IS CRAZY THOUGH! its like dev defines the rules and to check
 * any typo we have an `interface`.
 *
 */
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(res => {
  console.log(res.data);
  const todo = res.data as Todo;

  //injecting errors

  const id = todo.id;
  const title = todo.title;
  const fin = todo.completed;

  log(id, title, fin);

  // let check if static analysis gives us the right result when
  const gol = log;
  // and yes it does - uncomment the line below and ts-node the program
  // gol("delta", "omega", 1);
});

/**
 * Static analysis is done to check how this function is called at various points
 *
 *
 */
const log = (id: number, title: string, fin: boolean) => {
  console.log(`
  ${id} is the
  title of ${title} in
  fin of ${fin}
  `);
};
/**
 * ts this file and then node
 * or ts-node this file
 */
