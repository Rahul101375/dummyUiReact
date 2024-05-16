import axios from 'axios';
import { environment } from '../config/environment';
const baseURL = environment.baseURL;

const api = axios.create({
    baseURL : baseURL
})

api.interceptors.request.use(
    (config) => {
        sessionStorage.setItem('token',JSON.stringify(new Date()))
      const token = sessionStorage.getItem('token'); // Assuming you store the token in localStorage
      console.log("token",token)
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
        console.log("server error",error)
      return Promise.reject(error);
    }
  );
 function getAllInfo(endPoint){
  return api.get(endPoint).catch((error)=>{
    console.log("getInfo",error);
    apiHandleError(error)
})
}
 function getSingleInfo(endPoint,id){
    return api.get(endPoint+id).catch((error)=>{
        console.log("getInfo",error);
        apiHandleError(error)
    })
}

function createMethod(endPoint,body){
    return api.post(endPoint , body).catch((error)=>{
        console.log("getInfo",error);
        apiHandleError(error)
    })
}
function updateMethod(endPoint,id='',body={}){
    return api.put(endPoint+id,body).catch((error)=>{
        console.log("getInfo",error);
        apiHandleError(error)
    })
}
function deleteMethod(endPoint,id=''){
    return api.put(endPoint+id).catch((error)=>{
        console.log("getInfo",error);
        apiHandleError(error)
    })
}
const apiHandleError = (error)=>{
    console.log("error Handler",error.response.status)

}

export {getAllInfo,getSingleInfo,createMethod,updateMethod,deleteMethod}