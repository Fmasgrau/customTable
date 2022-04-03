import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_URL,
});

api.interceptors.request.use(request => {
  let params = ''
  if(request.params){
    const arrayOfParams = Object.keys(request.params).map(key => `${key}=${request.params[key]}`)
    params = arrayOfParams.join('&')
  }
  console.log(`%c${request.method?.toLocaleUpperCase()} ${request.baseURL}${request.url}${params && `?${params}`}` ,"color:green")
  return request
})
