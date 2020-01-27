import http from "./httpService"; //can give any name instead of http

export function getGenres() {
  return http.get("/genres");
}
