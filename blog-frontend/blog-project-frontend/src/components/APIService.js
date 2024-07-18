export default class APIService {
    static UpdatePost(post_id, body) {
        return fetch(`http://127.0.0.1:8000/api/posts/${post_id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token 041f511826f7d4a19d497162638be72120a173b9'
            },
            body: JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static InsertPost(body) {
        return fetch(`http://127.0.0.1:8000/api/posts/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token 041f511826f7d4a19d497162638be72120a173b9'
            },
            body: JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static DeletePost(post_id) {
        return fetch(`http://127.0.0.1:8000/api/posts/${post_id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token 041f511826f7d4a19d497162638be72120a173b9'
            }
        })
    }

    static LoginUser(body) {
        return fetch(`http://127.0.0.1:8000/auth/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(resp => resp.json())
    }
}