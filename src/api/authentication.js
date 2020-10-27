import axios from "axios";
import qs from "querystring";

const AUTHENTICATE_URL = "/api/authenticate";

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
          try {
            localStorage.setItem("sessionID", response.headers["session"]);
            localStorage.setItem("expiration", parseFloat(response.headers["expiration-time"]) + Date.now());
            localStorage.setItem("userID", response.headers["user-id"]);
            window.location.reload();
          } catch (err) {
            console.error(err);
          }
          resolve(response.status);
        })
        .catch((error) => {
          reject(error.response.status);
        });
    });
  }

  static logout() {
    return new Promise((resolve, reject) => {
      const session = localStorage.getItem("sessionID");
      if (!session) reject(null);
      localStorage.removeItem("sessionID");
      localStorage.removeItem("expiration");
      localStorage.removeItem("userID");
      axios
        .delete(`${AUTHENTICATE_URL}/logout`, {
          withCredentials: true,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Access-Control-Allow-Credentials": "true",
            "Session-ID": session,
          },
        })
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
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
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
          resolve(response.status);
        })
        .catch((error) => {
          reject(error.response.status);
        });
    });
  }

  static checkSession() {
    return new Promise((resolve, reject) => {
      if (!window.sessionStorage("session")) reject(null);
      axios
        .post(`${AUTHENTICATE_URL}/session`, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            session: window.sessionStorage("session"),
          },
        })
        .then((response) => {
          resolve(response.status);
        })
        .catch((error) => {
          window.sessionStorage.removeItem("session");
          window.sessionStorage.removeItem("name");
          reject(error.response.status);
        });
    });
  }
}
