const API_URL = "http://92.255.79.122:9999/api/v1/likes"

async function toggleLike(postID){
    const res = await fetch(`${API_URL}/${postID}/toggle`, {
        method: "POST",
    })
    return await res.json()
}

async function getLikes(postID){
    const res = await fetch(`${API_URL}/${postID}`, {
        method: "GET",
    })
    return await res.json()
}

async function getUserLikes(userID){
    const res = await fetch(`${API_URL}/user/${userID}`, {
        method: "GET",
    })
    return await res.json()
}

async function getLikesCount(postID){
    const res = await fetch(`${API_URL}/${postID}/count`, {
        method: "GET",
    })
    return await res.json()
}

async function checkLike(postID){
    const res = await fetch(`${API_URL}/${postID}/check`, {
        method: "GET",
    })
    return await res.json()
}

export { 
    toggleLike, getLikes, getUserLikes, getLikesCount, checkLike
}