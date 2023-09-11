import http from "./base-service";

export const todoList = () => http.get("/todos");

export const todoDetail = (id) => http.get(`/todos/${id}`);
