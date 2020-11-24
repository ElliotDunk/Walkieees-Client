import axios from "axios";

const API_URL_DEV = "https://localhost:8443/api/contact";
const API_URL = "/api/contact";

export default class {
  static contact(inputs) {
    return new Promise((resolve, reject) => {
      axios
        .post(API_URL_DEV, inputs)
        .then((response) => {
          resolve(response.status);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
