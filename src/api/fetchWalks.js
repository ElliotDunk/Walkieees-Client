import axios from "axios";

const API_URL = "http://doghubgateway.herokuapp.com/walks";

export default class FetchWalks {
  static location({ location, latitude, longitude, minDistance = 0, maxDistance = 80000, limit = 0 }) {
    const locationQuery = typeof location === "undefined" ? "" : "&location=" + location;
    const latQuery = typeof latitude === "undefined" ? "" : "&lat=" + latitude;
    const lngQuery = typeof longitude === "undefined" ? "" : "&lng=" + longitude;
    const minDistQuery = typeof minDistance === "undefined" ? "" : "&minDist=" + minDistance;
    const maxDistQuery = typeof maxDistance === "undefined" ? "" : "&maxDist=" + maxDistance;
    const limitQuery = typeof limit === "undefined" ? "" : "&limit=" + limit;

    console.log(typeof latitude);
    console.log(`${API_URL}/search?${locationQuery}${latQuery}${lngQuery}${minDistQuery}${maxDistQuery}${limitQuery}`);

    return new Promise((resolve, reject) => {
      axios
        .get(`${API_URL}/search?location=${locationQuery}${latQuery}${lngQuery}${minDistQuery}${maxDistQuery}${limitQuery}`)
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
