import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const userRole = () => {
  const { user } = useAuth();

  const [axiosSecure] = useAxiosSecure();

  const { data: role, isLoading: roleLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/api/auth/users/role/${user.email}`);

      console.log("User Role is", res.data.data);

      return res.data.data;
    },
  });

  return [role, roleLoading];
};

export default userRole;
