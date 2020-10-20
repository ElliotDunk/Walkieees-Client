import axios from "axios";

export default function PostLogout() {
  const API_URL = "/api/authenticate/logout";

  return new Promise((resolve, reject) => {
    const session = localStorage.getItem("sessionID");
    if (!session) reject(null);
    localStorage.removeItem("sessionID");
    localStorage.removeItem("expiration");
    localStorage.removeItem("userID");
    window.location.reload();
    axios
      .delete(API_URL, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Credentials": "true",
          "Session-ID": session,
        },
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(null);
      });
  });
}
