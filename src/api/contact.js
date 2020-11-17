import axios from "axios";

const API_URL = "https://localhost:8443/api/contact";
export default class {
  static contact(inputs) {
    return new Promise((resolve, reject) => {
      axios
        .post(API_URL, inputs)
        .then((response) => {
          resolve(response.status);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
