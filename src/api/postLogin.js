import axios from "axios";
import qs from "querystring";

export default function PostLogin(formData) {
  const API_URL = "/api/authenticate/login";

  return new Promise((resolve, reject) => {
    axios
      .post(API_URL, qs.stringify(formData), {
        withCredentials: true,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Credentials": "true",
        },
      })
      .then((response) => {
        try {
          localStorage.setItem("sessionID", response.headers["session"]);
          localStorage.setItem("expiration", parseFloat(response.headers["expiration-time"]) + Date.now());
          localStorage.setItem("userID", response.headers["user-id"]);
          window.location.reload();
        } catch (err) {
          console.error(err);
        }
        resolve(response);
      })
      .catch((error) => {
        reject(null);
      });
  });
}
