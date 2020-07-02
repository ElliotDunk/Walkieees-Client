import axios from "axios";

export default function fetchWalkLocation(location, minDistance = 0, maxDistance = 80000, limit = 0) {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://doghubgateway.herokuapp.com/walks/search?location=${location}&minDist=${minDistance}&maxDist=${maxDistance}&limit=${limit}`)
      .then((response) => {
        if (response.status === 200) {
          resolve(response.data);
        } else {
          reject(response.message);
        }
      })
      .catch((error) => {
        console.error(error);
        reject(null);
      });
  });
}
