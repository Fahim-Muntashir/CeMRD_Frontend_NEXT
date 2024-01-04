"use client";
import { useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { useRouter } from "next/navigation";

import { AuthContext } from "../providers/AuthProvider";

const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);
  const router = useRouter();
  const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
  });

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers.Authorization = token;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          await logOut();
          router.push("/login");
        }
        return Promise.reject(error);
      }
    );
  }, [logOut, navigate, axiosSecure]);
  return [axiosSecure];
};

export default useAxiosSecure;
