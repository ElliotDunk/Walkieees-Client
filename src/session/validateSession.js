export default function () {
  if (localStorage.getItem("expiration")) {
    const session = localStorage.getItem("expiration");
    if (session < Date.now()) {
      localStorage.removeItem("sessionID");
      localStorage.removeItem("expiration");
      localStorage.removeItem("userID");
    }
  }
}
