import axios from "axios";

//rodar com ipv4:  json-server --watch -d 180 --host 10.200.49.97 db.json

const api = axios.create({
    baseURL: 'http://10.200.49.97:3000/'
})

export default api;