import axios from "axios";

const API_URL_DEV = "https://localhost:8443/api/walks";
const API_URL = "/api/walks";

export default class {
  static fetchWalk(id) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${API_URL_DEV}/walkview/${id}`, { withCredentials: true })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(null);
        });
    });
  }

  static fetchManyWalks({
    location,
    latitude,
    longitude,
    minDistance,
    maxDistance,
    limit,
  }) {
    const locationQuery =
      typeof location === "undefined" ? "" : "&location=" + location;
    const latQuery = typeof latitude === "undefined" ? "" : "&lat=" + latitude;
    const lngQuery =
      typeof longitude === "undefined" ? "" : "&lng=" + longitude;
    const minDistQuery =
      typeof minDistance === "undefined" ? "" : "&minDist=" + minDistance;
    const maxDistQuery =
      typeof maxDistance === "undefined" ? "" : "&maxDist=" + maxDistance;
    const limitQuery = typeof limit === "undefined" ? "" : "&limit=" + limit;

    return new Promise((resolve, reject) => {
      axios
        .get(
          `${API_URL_DEV}/search?${locationQuery}${latQuery}${lngQuery}${minDistQuery}${maxDistQuery}${limitQuery}`,
          { withCredentials: true }
        )
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(null);
        });
    });
  }

  static fetchUserWalks() {
    return new Promise((resolve, reject) => {
      axios
        .get(`${API_URL_DEV}/userwalks`, {
          withCredentials: true,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  static create(data) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${API_URL}/create`, data)
        .then((response) => {
          resolve(response.status);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
