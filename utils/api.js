export function getHomeData() {
  return fetch(process.env.API_URL, {
    method: "GET",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
      "api-key": process.env.API_KEY,
    },
  })
    .then((response) => response.json())
    .catch((error) => console.log("error", error));
}
