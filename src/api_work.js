import { register, login } from "../api/auth.js";

const profile = {
    login: "Gelmen_",
    email: "elda.pisos@gmail.com",
    password: "0000",
}

console.log(register(profile.login, profile.email, profile.password))
