import http from "../http/axios";

export function getUserInfoApi(params) {
  const url = "user.json";
  return http.get(url, params);
}
