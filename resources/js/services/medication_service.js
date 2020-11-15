import { http, httpFile } from './http_service';

//create medication
export function createMedication(data) {
    return httpFile().post('/medications', data);

}
//read medication
export function loadMedication(page = 1) {
    return http().get('/medications?page=' + page);
}


//delete medication
export function deleteMedication(id) {
    return http().delete(`/medications/${id}`);
}

//update medication
export function updateMedication(id, data) {
    return httpFile().post(`medications/${id}`, data);
}

//single medication
export function singleMedication(id) {
    return http().get(`/medications/${id}`);
}

//load medicaton with categories
export function loadCategories() {
    return http().get('/get-categories');
}
