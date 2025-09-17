const API_URL = "http://92.255.79.122:9999/api/v1/post"

async function makePost(caption, image_url, location) {
    const res = await fetch(`${API_URL}/posts`, {
        method: "POST",
        body: JSON.stringify({
            caption,
            image_url,
            location
        })
    })
    return await res.json()
}

async function getAllPosts(page, limit) {
    const res = await fetch(`${API_URL}/posts?page=${page}&limit=${limit}`, {
        method: "GET",
    })
    return await res.json()
}

async function getPostsByID(id) {
    const res = await fetch(`${API_URL}/posts/${id}`, {
        method: "GET",
    })
    return await res.json()
}

async function refreshPost(id, caption, location) {
    const res = await fetch(`${API_URL}/posts/${id}`, {
        method: "GET",
        body: JSON.stringify({
            caption,
            location
        })
    })
    return await res.json()
}

async function deletePost(id) {
    const res = await fetch(`${API_URL}/posts/${id}`, {
        method: "DELETE",
    })
    return await res.json()
}

async function getUserPosts(id, page, limit) {
    const res = await fetch(`${API_URL}/posts/user/${id}?page=${page}&limit=${limit}`, {
        method: "GET",
    })
    return await res.json()
}

async function postsLenta(page, limit) {
    const res = await fetch(`${API_URL}/posts/feed/?page=${page}&limit=${limit}`, {
        method: "GET",
    })
    return await res.json()
}