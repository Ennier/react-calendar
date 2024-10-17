import { redirect } from "react-router-dom";

export function getTokenDuration() {
    const storedExpiration = localStorage.getItem('expiration');
    const expirationDate = new Date(storedExpiration);
    const now = new Date();
    return expirationDate.getTime() - now.getTime();
}

export function getAuthToken() {
    const storedToken = localStorage.getItem('token');

    if (!storedToken) {
        return;
    }

    const tokenDuration = getTokenDuration();

    if (tokenDuration < 0) {
        return null;
    }

    return storedToken;
}

export function tokenLoader() {
    return getAuthToken();
}

export function checkAuthLoader() {
    const token = getAuthToken();
    if (!token) {
        return redirect('/auth');
    }
    return null;
}