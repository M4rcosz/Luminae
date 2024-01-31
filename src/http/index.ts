import axios from "axios";

const urlForDev = "localhost:3000/";

const urlForDeploy = "https://my-json-server.typicode.com/M4rcosz/Luminae/";


const http = axios.create({
    baseURL: urlForDeploy,
    headers: {
        "Content-Type": "application/json",
    }
});

export default http