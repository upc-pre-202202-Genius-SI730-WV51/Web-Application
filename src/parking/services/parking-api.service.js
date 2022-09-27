import http from '../../core/services/http-common';

export class ParkingApiService {
    getAll() {
        return http.get('/estacionamientos');
    }

    getById(id) {
        return http.get(`/estacionamientos/${id}`);
    }

    create(data) {
        return http.post('/estacionamientos', data);
    }

    update(id, data) {
        return http.put(`/estacionamientos/${id}`, data);
    }

    delete(id) {
        return http.delete(`/estacionamientos/${id}`);
    }

    findByTitle(title) {
        return http.get(`/estacionamientos?title=${title}`);
    }
}