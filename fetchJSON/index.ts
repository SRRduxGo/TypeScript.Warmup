import axios from "axios";
const url = "http://jsonplaceholder.typicode.com/todos/1";
axios.get(url).then(res => {
  console.log(res.data);
});

/**
 * ts this file and then node
 * or ts-node this file
 */
