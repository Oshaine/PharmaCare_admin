import { http, httpFile } from './http_service';
import jwt from 'jsonwebtoken';
import store from '../store';


//register
export function register(user) {
    return http().post('/auth/register', user);
}

//login
export function login(user) {
    return http().post('/auth/login', user)
        .then(response => {

            if (response.status === 200) {
                //save user data
                setToken(response.data);
            }

            return response.data;
        });
}


//check login status
export function isLoggedIn() {
    const token = localStorage.getItem('PharmaCare-token');
    return token != null;
}

//logout
export function logout() {
    http().get('auth/logout');
    localStorage.removeItem('PharmaCare-token');
}

//set access token
function setToken(user) {
    const token = jwt.sign({ user: user }, 'Ph@rm@[C@re_]');
    localStorage.setItem('PharmaCare-token', token);
    store.dispatch('authenticate', user.user);

}

//get access token
export function getAccessToken() {
    const token = localStorage.getItem('PharmaCare-token');
    if (!token) {
        return null;
    }
    const tokenData = jwt.decode(token);
    return tokenData.user.access_token;
}

//get user role
export function getUserRole() {
    const token = localStorage.getItem('PharmaCare-token');
    if (!token) {
        return null;
    }
    const tokenData = jwt.decode(token);
    return tokenData.user.user.role;
}

export function getProfile() {
    return http().get('/auth/profile');
}
