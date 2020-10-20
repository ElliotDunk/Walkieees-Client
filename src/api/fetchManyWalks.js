import axios from "axios";

export default function FetchWalksSearch({ location, latitude, longitude, minDistance, maxDistance, limit }) {
  const API_URL = "/api/walks";
  const locationQuery = typeof location === "undefined" ? "" : "&location=" + location;
  const latQuery = typeof latitude === "undefined" ? "" : "&lat=" + latitude;
  const lngQuery = typeof longitude === "undefined" ? "" : "&lng=" + longitude;
  const minDistQuery = typeof minDistance === "undefined" ? "" : "&minDist=" + minDistance;
  const maxDistQuery = typeof maxDistance === "undefined" ? "" : "&maxDist=" + maxDistance;
  const limitQuery = typeof limit === "undefined" ? "" : "&limit=" + limit;

  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/search?${locationQuery}${latQuery}${lngQuery}${minDistQuery}${maxDistQuery}${limitQuery}`)
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
