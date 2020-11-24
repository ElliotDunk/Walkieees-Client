import axios from "axios";
import qs from "querystring";

const AUTHENTICATE_URL_DEV = "https://localhost:8443/api/authenticate";
const AUTHENTICATE_URL = "/api/authenticate";

export default class Authenticate {
  static login(formData) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${AUTHENTICATE_URL_DEV}/login`, qs.stringify(formData), {
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
        .delete(`${AUTHENTICATE_URL_DEV}/logout`, { withCredentials: true })
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
        .post(`${AUTHENTICATE_URL_DEV}/register`, qs.stringify(formData), {
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
        .post(`${AUTHENTICATE_URL_DEV}/register`, qs.stringify(formData), {
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

  static linkFacebook() {
    console.log("Facebook");
    return new Promise((resolve, reject) => {
      axios
        .put(`${AUTHENTICATE_URL_DEV}/link/facebook`, {
          withCredentials: true,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
        .then((response) => {
          resolve(response.status);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  }

  static twitter() {
    window.open(`https://localhost:8443/api/authenticate/twitter`, "_self");
  }

  static google() {
    window.open(`https://localhost:8443/api/authenticate/google`, "_self");
  }

  static requestResetPassword(formData) {
    return new Promise((resolve, reject) => {
      axios
        .post(
          `${AUTHENTICATE_URL_DEV}/request/resetpassword`,
          qs.stringify(formData),
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then((response) => {
          resolve(response.status);
        })
        .catch((error) => {
          reject(error.response.status);
        });
    });
  }

  static resetPassword(formData) {
    return new Promise((resolve, reject) => {
      axios
        .put(`${AUTHENTICATE_URL_DEV}/resetpassword`, qs.stringify(formData), {
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
}
