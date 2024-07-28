import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import userServices, { User } from "../services/user-services";

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = userServices.getAll<User>();
    request.then((res) => {
      setUsers(res.data);
      setLoading(false);
    });
    request.catch((err) => {
      if (err instanceof CanceledError) return;
      setError(err.message);
      setLoading(false);
    });
    return () => cancel();
  }, []);
  return { users, error, isLoading, setUsers, setError };
};

export default useUsers;
