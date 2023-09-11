import http from "./base-service";

export const usersList = () => http.get("/users");

export const userDetail = (id) => http.get(`/users/${id}`);
