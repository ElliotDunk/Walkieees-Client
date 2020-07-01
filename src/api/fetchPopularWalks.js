import axios from "axios";

export default function fetchPopularWalks(limit = 8, latitude = 0.0969321, longitude = 50.963583) {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://doghubgateway.herokuapp.com/walks/search?lon=${longitude}&lat=${latitude}&limit=${limit}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.error(error);
        reject(null);
      });
  });
}
