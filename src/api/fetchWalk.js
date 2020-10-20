import axios from "axios";

export default function FetchWalk(id) {
  const API_URL = "/api/walks";

  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/${id}`)
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
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
