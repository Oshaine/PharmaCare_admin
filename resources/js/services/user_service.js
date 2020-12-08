import { http, httpFile } from './http_service';

//user scope
export function userScope() {
    return http().get('/user/user-scope');

}

//admin scope
export function adminScope() {
    return http().get('/user/admin-scope');

}

//create users
export function createUsers(data) {
    return httpFile().post('/users', data);

}
//reade users
export function getUsers() {
    return http().get('auth/get-users');
}


//delete users
export function deleteUsers(id) {
    return http().delete(`/users/${id}`);
}

//update users
export function updateUsers(id, data) {
    return http().put(`/auth/update-users/${id}`, data);
}
