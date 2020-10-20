import axios from "axios";

export default function PostLogin(formData) {
  const API_URL = "/api/authenticate/session";

  return new Promise((resolve, reject) => {
    if (window.sessionStorage("session")) {
      axios
        .post(API_URL, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            session: window.sessionStorage("session"),
          },
        })
        .then((response) => {
          resolve();
        })
        .catch((error) => {
          if (error.response.status === 401) {
            window.sessionStorage.removeItem("session");
            window.sessionStorage.removeItem("name");
            reject({ status: 401 });
          }
          console.log(error);
          reject(null);
        });
    } else {
      reject(null);
    }
  });
}
