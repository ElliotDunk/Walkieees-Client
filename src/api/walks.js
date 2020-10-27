import axios from "axios";

const API_URL = "/api/walks";

export default class Walks {
  static fetchWalk(id) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${API_URL}/${id}`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(null);
        });
    });
  }

  static fetchManyWalks({ location, latitude, longitude, minDistance, maxDistance, limit }) {
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
          resolve(response.data);
        })
        .catch((error) => {
          reject(null);
        });
    });
  }
}
