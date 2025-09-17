const API_URL = "http://92.255.79.122:9999/api/v1/comments"

async function makeComment(postID, content) {
    const res = await fetch(`${API_URL}/comments/${postID}`, {
        method: "POST",
        body: JSON.stringify({
            content
        })
    })
    return await res.json()
}

async function getCommentByID(id) {
    const res = await fetch(`${API_URL}/comments/${id}`, {
        method: "GET",
    })
    return await res.json()
}

async function refreshComment(id, content) {
    const res = await fetch(`${API_URL}/comments/${id}`, {
        method: "PUT",
        body: JSON.stringify({
            content
        })
    })
    return await res.json()
}

async function deleteComment(id) {
    const res = await fetch(`${API_URL}/comments/${id}`, {
        method: "DELETE",
    })
    return await res.json()
}

async function getCommentByPost(postID) {
    const res = await fetch(`${API_URL}/comments/post/${id}?postID=${postID}`, {
        method: "GET",
    })
    return await res.json()
}

async function getCommentByUser(userID) {
    const res = await fetch(`${API_URL}/comments/post/${id}?userID=${userID}`, {
        method: "GET",
    })
    return await res.json()
}