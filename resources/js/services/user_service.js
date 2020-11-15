import { http, httpFile } from './http_service';

//user scope
export function userScope() {
    return http().get('/user/user-scope');

}

//admin scope
export function adminScope() {
    return http().get('/user/admin-scope');

}
