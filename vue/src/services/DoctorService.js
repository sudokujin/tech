import axios from 'axios';

const http = axios.create({
    baseURL: "http://localhost:8080"
});

export default {
    list() {
        return http.get('/doctors');
    },

    get(id) {
        return http.get(`/doctors/${id}`);
    }
}