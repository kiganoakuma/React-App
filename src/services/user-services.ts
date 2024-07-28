import apiClient from "./api-client";

export interface User {
  id: number;
  name: string;
}

class UserServices {
  getAllUsers() {
    const controller = new AbortController();
    const request = apiClient.get<User[]>("/users", {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }

  deleteUser(id: number) {
    return apiClient.delete("/users/" + id);
  }

  createUser(user: User) {
    return apiClient.post("/users", user);
  }

  updateUser(id: number, user: User) {
    return apiClient.patch("/users/" + id, user);
  }
}

export default new UserServices();
