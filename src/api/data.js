import * as api from './api.js';


const host = api.settings.host = 'http://localhost:3030';
api.settings.host = host;
export const login = api.login;
export const register = api.register;
export const logout = api.logout;


export async function getAllAds() {
    return await api.get(host + '/data/cars?sortBy=_createdOn%20desc');
}

export async function getAdById(id) {
    return await api.get(host + '/data/cars/' + id);
}

export async function createAd(data) {
    return await api.post(host + '/data/cars/', data);
}

export async function editAd(id, data) {
    return await api.put(host + '/data/cars/' + id, data);
}

export async function deleteAd(id) {
    return await api.del(host + '/data/cars/' + id);
}

export async function getMyAds(userId) {
    return await api.get(host + `/data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export async function search(query) {
    return await api.get(host + `/data/cars?where=year%3D${query}`);
}