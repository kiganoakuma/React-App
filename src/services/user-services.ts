import apiClient from "./api-client";

interface User {
  id: number;
  name: string;
}

class UserServices {
  getAllUsers() {
    const controller = new AbortController();
    apiClient
      .get<User[]>("/users", {
        signal: controller.signal,
      })

  }
}

export default new UserServices();
