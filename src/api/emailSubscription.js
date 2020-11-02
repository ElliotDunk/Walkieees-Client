import axios from "axios";

export default function PostEmailSubscription(email) {
  const API_URL = "/api/subscribe/email";

  return new Promise((resolve, reject) => {
    axios
      .post(
        API_URL,
        {
          email: email,
          permissions: {
            marketingEmails: true,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        alert(`${email} has been subscribed.`);
        resolve(response);
      })
      .catch((error) => {
        alert(`${email} has NOT been subscribed.`);
        reject(null);
      });
  });
}
