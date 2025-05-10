import axios from "axios";

const http = axios.create({
  baseURL: "https://api.coinlore.net/api",
});

export { http };
