import axios from "axios";

const API_URL = "http://localhost:5001/walks";

export default class FetchWalks {
  static location({ location, latitude, longitude, minDistance = 0, maxDistance = 80000, limit = 0 }) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${API_URL}/search?location=${location}&lat=${latitude}&lng=${longitude}&minDist=${minDistance}&maxDist=${maxDistance}&limit=${limit}`)
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
}