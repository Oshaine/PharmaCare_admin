import { http, httpFile } from './http_service';

//create category
export function createOrders(data) {
    return httpFile().post('/orders', data);

}
//reade category
export function getOrders() {
    return http().get('/orders');
}


//delete category
export function deleteOrders(id) {
    return http().delete(`/orders/${id}`);
}

//update category
export function updateOrders(id, data) {
    return http().put(`orders/${id}`, data);
}

