import axios from "axios";

export default function fetchWalksLocation(location, minDistance = 0, maxDistance = 80000, limit = 0) {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://doghubgateway.herokuapp.com/walks/search?location=${location}&minDist=${minDistance}&maxDist=${maxDistance}&limit=${limit}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.error(error);
        reject(null);
      });
  });
}
