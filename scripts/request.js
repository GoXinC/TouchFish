import { Alert } from "react-native";

const url = "http://localhost:8080";

export function request(url, params) {
  return fetch(url, params).then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
}

export function get(path, params) {
  const queryString = new URLSearchParams(params).toString();
  return request(rl + path + "?" + queryString)
}

export function post(path, body) {
  return request(url + path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body), // 发送 JSON 格式的数据
  })
}
