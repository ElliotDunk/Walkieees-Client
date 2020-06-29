import axios from "axios";

export default function fetchPopularWalks(
  limit = 8,
  latitude = 0.0969321,
  longitude = 50.963583
) {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `http://192.168.1.149:5000/walks/search?lon=${longitude}&lat=${latitude}&limit=${limit}`
      )
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.error(error);
        reject(null);
      });
  });
}
