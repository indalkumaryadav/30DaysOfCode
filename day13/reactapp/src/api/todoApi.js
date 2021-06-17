import axios from "axios";

export async function fetchTodo() {
  return axios.get(`https://jsonplaceholder.typicode.com/todos`).then().catch();
}
