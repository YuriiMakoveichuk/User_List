import axios from "axios";

export const INSTANCE = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export async function fetchUsers() {
  const { data } = await INSTANCE.get("users");
  return data;
}

export async function fetchUserId(id) {
  const { data } = await INSTANCE.get(`users/${id}`);
  return data;
}

export async function fetchPosts() {
  const { data } = await INSTANCE.get("posts");
  return data;
}
