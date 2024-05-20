import axios from 'axios';
import { environment } from '../config/environment';
const baseURL = environment.baseURL;

const api = axios.create({
    baseURL: baseURL
})

api.interceptors.request.use(
    (config) => {
        sessionStorage.setItem('token', JSON.stringify(new Date()))
        const token = sessionStorage.getItem('token'); // Assuming you store the token in localStorage
        console.log("token", token)
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        console.log("server error", error)
        return Promise.reject(error);
    }
);
function getAllInfo(endPoint) {
    return api.get(endPoint).catch((error) => {
        console.log("getInfo", error);
        apiHandleError(error)
    })
}
function getSingleInfo(endPoint, id) {
    return api.get(endPoint + id).catch((error) => {
        console.log("getInfo", error);
        apiHandleError(error)
    })
}

function createMethod(endPoint, body) {
    return api.post(endPoint, body).catch((error) => {
        console.log("getInfo", error);
        apiHandleError(error)
    })
}
function updateMethod(endPoint, id = '', body = {}) {
    return api.put(endPoint + id, body).catch((error) => {
        console.log("getInfo", error);
        apiHandleError(error)
    })
}
function deleteMethod(endPoint, id = '') {
    return api.put(endPoint + id).catch((error) => {
        console.log("getInfo", error);
        apiHandleError(error)
    })
}
const apiHandleError = (error) => {
    console.log("error Handler", error.response.status)

}
function getSingleCharacters(data) {
    return data.charAt(0).toUpperCase();
}
function getRandomColor() {

}
function getColorForLetter(letter) {
    console.log("color", letter)
    let asciiValue = (letter.charAt(0)).toUpperCase().charCodeAt(0);
    let baseValue = asciiValue - 65;
    let red = (baseValue * 5) % 256;
    let green = (baseValue * 3) % 256;
    let blue = (baseValue * 7) % 256;
    let color = `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`;

    return color;
}

export { getAllInfo, getSingleInfo, createMethod, updateMethod, deleteMethod, getSingleCharacters, getRandomColor, getColorForLetter }