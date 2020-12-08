import { http, httpFile } from './http_service';

//create order
export function createOrders(data) {
    return httpFile().post('/orders', data);

}
//reade order
export function getOrders() {
    return http().get('/orders');
}


//delete order
export function deleteOrders(id) {
    return http().delete(`/orders/${id}`);
}

//update order
export function updateOrders(id, data) {
    return http().put(`orders/${id}`, data);
}

