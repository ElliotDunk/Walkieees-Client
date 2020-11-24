import axios from "axios";

const ACCOUNT_URL_DEV = "https://localhost:8443/api/account";
const ACCOUNT_URL = "/api/account";

export default class {
  static retrieve() {
    return new Promise((resolve, reject) => {
      axios
        .get(`${ACCOUNT_URL_DEV}/retrieve`, {
          withCredentials: true,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  static delete() {
    return new Promise((resolve, reject) => {
      axios
        .delete(`${ACCOUNT_URL_DEV}/delete`, {
          withCredentials: true,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
        .then((response) => {
          window.location.reload();
          resolve(response.status);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
