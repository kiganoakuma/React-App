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
    const delete = apiClient.delete("/users/" + user.id)
    return { request, cancel: () => controller.abort() };
  }
}

export default new UserServices();
