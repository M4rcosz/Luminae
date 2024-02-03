import axios from "axios";

const urlForDev = "http://localhost:3000/";

const urlForDeploy = "https://my-json-server.typicode.com/M4rcosz/Luminae/";


const http = axios.create({
    baseURL: urlForDev,
    headers: {
        "Content-Type": "application/json",
    }
});

export default http