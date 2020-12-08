import { http, httpFile } from './http_service';

//create category
export function createCategory(data) {
    return http().post('/categories', data);

}
//read category
export function loadCategories() {
    return http().get('/categories');
}


//delete category
export function deleteCategory(id) {
    return http().delete(`/categories/${id}`);
}

//update category
export function updateCategory(id, data) {
    return http().put(`categories/${id}`, data);
}

export function loadMore(page = 1) {
    return http().get('/categories?page=' + page);
}
