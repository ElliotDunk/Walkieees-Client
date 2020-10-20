import axios from "axios";
import qs from "querystring";

export default function PostRegistration(formData) {
  const API_URL = "/api/authenticate/register";

  return new Promise((resolve, reject) => {
    axios
      .post(API_URL, qs.stringify(formData), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((response) => {
        if (response.status === 201) {
          resolve(response.data);
        } else {
          reject(null);
        }
      })
      .catch((error) => {
        console.error(error);
        reject(null);
      });
  });
}
