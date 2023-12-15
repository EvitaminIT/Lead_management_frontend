import axios from "axios";

let baseURL = 'https://akshatevits.pythonanywhere.com/'

const API_Service = axios.create({
    baseURL: baseURL
})

export default API_Service;