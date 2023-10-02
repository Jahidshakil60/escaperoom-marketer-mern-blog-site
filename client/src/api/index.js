import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const logIn = (formData) => API.post("/user/signin", formData);
export const createPost = (newPost) => API.post("/posts", newPost);
export const fetchPosts = () => API.get("/posts");
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
