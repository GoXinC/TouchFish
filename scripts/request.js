const url = "http://localhost:8080"

export function get(path, params) {
    const queryString = new URLSearchParams(params).toString();
    return fetch(url + path + "?" + queryString)
        .then(response => {
            console.log(response);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // 解析 JSON 格式的响应
        })
}

export function post(path, body) {
    return fetch(url + path, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body) // 发送 JSON 格式的数据
    }).then(response => {
        console.log(response);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // 解析 JSON 格式的响应
    })
}
