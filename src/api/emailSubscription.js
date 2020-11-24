import axios from "axios";

const API_URL_DEV = "/api/subscribe/email";
const API_URL = "/api/subscribe/email";

export default class {
  static subscribe(email) {
    return new Promise((resolve, reject) => {
      axios
        .post(
          API_URL_DEV,
          {
            email: email,
          },
          { withCredentials: true }
        )
        .then((response) => {
          alert(`${email} has been subscribed.`);
          resolve(response);
        })
        .catch((error) => {
          alert(`${email} has NOT been subscribed.`);
          reject(null);
        });
    });
  }

  static Unsubscribe(email) {
    return new Promise((resolve, reject) => {
      axios
        .delete(API_URL_DEV, { data: { email: email } })
        .then((response) => {
          resolve(response.status);
        })
        .catch((error) => {
          reject(error.response.status);
        });
    });
  }
}
