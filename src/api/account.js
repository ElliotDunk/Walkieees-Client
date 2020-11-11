import axios from "axios";

const ACCOUNT_URL = "https://localhost:8443/api/account";

export default class {
  static retrieve() {
    return new Promise((resolve, reject) => {
      axios
        .get(`${ACCOUNT_URL}/retrieve`, {
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
        .delete(`${ACCOUNT_URL}/delete`, {
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
