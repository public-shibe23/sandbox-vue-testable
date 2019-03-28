import axios from "axios";

function fetch(param) {
  return axios
    .get("http://localhost:3000/data")
    .then(res => {
      return res;
    })
    .catch(error => {
      console.log(error);
      return error;
    });
}

export async function fetchProducts(param) {
  const res = await fetch(param);
  return res;
}
