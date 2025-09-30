import apiRequest from './index.js';

const API_URL = "http://92.255.79.122:9999/api/v1";

async function makePost(caption, image_url, location) {
    let token = window.sessionStorage.getItem("accessToken")
    return await apiRequest(token, `${API_URL}/posts`, {
        method: "POST",
        body: JSON.stringify({
            caption,
            image_url,
            location
        })
    })
}

async function getAllPosts(page, limit) {
    let token = window.sessionStorage.getItem("accessToken")
    return await apiRequest(token, `${API_URL}/posts?page=${page}&limit=${limit}`, {
        method: "GET",
    })
}

async function getPostsByID(id) {
    let token = window.sessionStorage.getItem("accessToken")
    return await apiRequest(token, `${API_URL}/posts/${id}`, {
        method: "GET",
    })
}

async function refreshPost(id, caption, location) {
    let token = window.sessionStorage.getItem("accessToken")
    return await apiRequest(token, `${API_URL}/posts/${id}`, {
        method: "GET",
        body: JSON.stringify({
            caption,
            location
        })
    })
}

async function deletePost(id) {
    let token = window.sessionStorage.getItem("accessToken")
    return await apiRequest(token, `${API_URL}/posts/${id}`, {
        method: "DELETE",
    })
}

async function getUserPosts(id, page, limit) {
    let token = window.sessionStorage.getItem("accessToken")
    return await apiRequest(token, `${API_URL}/posts/user/${id}?page=${page}&limit=${limit}`, {
        method: "GET",
    })
}

async function postsLenta(page, limit) {
    let token = window.sessionStorage.getItem("accessToken")
    return await apiRequest(token, `${API_URL}/posts/feed/?page=${page}&limit=${limit}`, {
        method: "GET",
    })
}

export {makePost, getAllPosts}