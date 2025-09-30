async function refreshToken() {
     const res = await fetch(`http://92.255.79.122:9999/api/v1/auth/refresh-tokens`, {
        method: "POST",
        credentials: "include"
    })
    return await res.json()
    
}

export default async function apiRequest(accessToken, url, req, attemps = 2){
    try{
        let resp  = await fetch(url, {
            ...req,
            credentials: "include",
            headers:{
                ...req.headers,
                "Authorization": `Bearer ${accessToken}`,
                "Referer": "http://localhost:5500"
            },
        })

        if  (resp.status > 300 ) throw new Error({
            error: await resp.json(),
            status: resp.status
        })

        return await resp.json()
    
    }
    catch(e){
        if (attemps == 0) return e

        if (e.status == 401 && attemps > 0){
            let newToken = await refreshToken()
            //добавить проверку пришедших даннх
            window.sessionStorage.setItem("accessToken", newToken.accessToken)
            return await apiRequest(newToken.accessToken, url, req, attemps-1)
        }
        return await apiRequest(accessToken, url, req, attemps-1)
    }
}