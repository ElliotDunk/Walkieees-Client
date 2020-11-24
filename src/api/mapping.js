import axios from "axios";

const API_URL_DEV = "https://localhost:8443/api/map/find";
const API_URL = "/api/map/find";

export default class {
  static find({ location, limit, country }) {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `${API_URL_DEV}/?location=${location}${limit ? "/limit=" + limit : ""}${
            country ? "/country=" + country : ""
          }`,
          { withCredentials: true }
        )
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response.status);
        });
    });
  }
}
