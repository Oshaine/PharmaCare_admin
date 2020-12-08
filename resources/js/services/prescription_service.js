import { http, httpFile } from './http_service';
//create prescriptions
export function createPrescription(data) {
    return httpFile().post('/prescriptions', data);

}
//read prescription
export function loadPrescriptions() {
    return http().get('/prescriptions');
}


//delete prescription
export function deletePrescription(id) {
    return http().delete(`/prescriptions/${id}`);
}

//update prescription
export function updatePrescription(id, data) {
    return httpFile().post(`prescriptions/${id}`, data);
}

//load medicaton with categories
export function loadUsers() {
    return http().get('/all-users');
}

//load prescribed medications
export function getMedications() {
    return http().get('/prescribed-medications')
}
