import { get, post } from "./request";

export function login(username, password) {
  return post("/login", { username, password });
}
