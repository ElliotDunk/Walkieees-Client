import axios from "axios";
import qs from "querystring";
import jwt from "jsonwebtoken";

const AUTHENTICATE_URL = "https://localhost:8443/api/authenticate";

export default class Authenticate {
  static login(formData) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${AUTHENTICATE_URL}/login`, qs.stringify(formData), {
          withCredentials: true,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Access-Control-Allow-Credentials": "true",
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

  static logout() {
    return new Promise((resolve, reject) => {
      axios
        .delete(`${AUTHENTICATE_URL}/logout`, { withCredentials: true })
        .then((response) => {
          window.location.reload();
          resolve(response.status);
        })
        .catch((error) => {
          reject(error.response.status);
        });
    });
  }

  static register(formData) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${AUTHENTICATE_URL}/register`, qs.stringify(formData), {
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

  static registerAuth(formData) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${AUTHENTICATE_URL}/register`, qs.stringify(formData), {
          withCredentials: true,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
        .then((response) => {
          window.location.href = "/";
          resolve(response.status);
        })
        .catch((error) => {
          reject(error.response.status);
        });
    });
  }

  static facebook() {
    window.open(`https://localhost:8443/api/authenticate/facebook`, "_self");
  }
}
