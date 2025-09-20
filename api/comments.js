import apiRequest from '.';

const API_URL = "http://92.255.79.122:9999/api/v1/comments"

async function makeComment(postID, content) {
    let token = window.sessionStorage.getItem("accessToken")
    return await apiRequest(token, `${API_URL}/comments/${postID}`, {
        method: "POST",
        body: JSON.stringify({
            content
        })
    })
}

async function getCommentByID(id) {
    let token = window.sessionStorage.getItem("accessToken")
    return await apiRequest(token, `${API_URL}/comments/${id}`, {
        method: "GET",
    })
}

async function refreshComment(id, content) {
    let token = window.sessionStorage.getItem("accessToken")
    return await apiRequest(token, `${API_URL}/comments/${id}`, {
        method: "PUT",
        body: JSON.stringify({
            content
        })
    })
}

async function deleteComment(id) {
    let token = window.sessionStorage.getItem("accessToken")
    return await apiRequest(token, `${API_URL}/comments/${id}`, {
        method: "DELETE",
    })
}

async function getCommentByPost(postID) {
    let token = window.sessionStorage.getItem("accessToken")
    return await apiRequest(token, `${API_URL}/comments/post/${id}?postID=${postID}`, {
        method: "GET",
    })
}

async function getCommentByUser(userID) {
    let token = window.sessionStorage.getItem("accessToken")
    return await apiRequest(token, `${API_URL}/comments/post/${id}?userID=${userID}`, {
        method: "GET",
    })
}