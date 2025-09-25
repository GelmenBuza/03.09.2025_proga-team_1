import apiRequest from './index.js';

const API_URL = "http://92.255.79.122:9999/api/v1/auth";


async function register(login, email, password) {
    const res = await fetch(`${API_URL}/register`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            "Referer": "http://127.0.0.1:5500/"
        },
        body: JSON.stringify({
            login,
            email,
            password
        })
    })
    return res.json()
}

async function login(login, password) {
    const res = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            login,
            password
        })
    })
    return await res.json()
}

async function logout() {
    const res = await fetch(`${API_URL}/logout`, {
        method: "POST",
    })
    return await res.json()
}

async function verify_email(token) {
    const res = await fetch(`${API_URL}/verify_email`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            "Referer": "http://127.0.0.1:5500/"
        },
        body: JSON.stringify({
            token,
        })
    })
    return res.json()
}

export { register, login, verify_email }
