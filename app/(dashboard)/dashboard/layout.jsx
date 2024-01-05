"use client";
import logo from "../../../public/Images/logo.png";
import "../../globals.css";
import { FaBlogger } from "react-icons/fa";
import { GiArchiveResearch } from "react-icons/gi";
import useAuth from "../../../hooks/useAuth";
import userRole from "../../../hooks/userRole";
import { FaUsers } from "react-icons/fa";
import Link from "next/link";
import { QueryClient, QueryClientProvider } from "react-query";
import AuthProvider from "../../../providers/AuthProvider";
import Image from "next/image";
export default function DashboardLayout({ children }) {
  // offset navbar height
  // TODO:load data from the server to thava dynamic isAdmin based on data
  // const isAdmin = true;
  const queryClient = new QueryClient();

  // const isAdmin = role === "admin";

  // const { user } = useAuth();
  // const [role] = userRole();

  const user = null;
  const role = "herl";
  const isAdmin = null;

  return (
    <div className="flex ">
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <div>
            <aside class="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
              <Link href="/" class="mx-auto">
                <Image width={140} src={logo} alt="" />
              </Link>

              <div class="flex flex-col items-center mt-6 -mx-2">
                <Image
                  class="object-cover w-24 h-24 mx-2 rounded-full"
                  src="https://i.ibb.co/j5XYyjq/53057c9d-d3d4-476e-897e-4757470e3df7-4.jpg"
                  width={300}
                  height={300}
                  alt="avatar"
                />
                <h4 class="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">
                  {user?.displayName}
                </h4>
                <p class="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">
                  {role}
                </p>
              </div>

              <div class="flex flex-col justify-between flex-1 mt-6">
                <nav>
                  {" "}
                  <Link
                    class="flex items-center bg-gray-100  px-4 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                    href="/dashboard/myaccount"
                  >
                    <svg
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <span class="mx-4 font-medium">Profile</span>
                  </Link>
                  {isAdmin && (
                    <>
                      <Link
                        class="flex items-center px-4 py-2 mt-5 text-gray-700 rounded-lg 
                  dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700
                  dark:bg-gray-800 "
                        href="/dashboard/users"
                      >
                        <FaUsers />

                        <span class="mx-4 font-medium">Manage Users</span>
                      </Link>
                      {/* =============== */}
                      <Link
                        class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                        href="manageblog"
                      >
                        <FaBlogger />

                        <span class="mx-4 font-medium">Manage Blog</span>
                      </Link>
                      <Link
                        class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                        href="/dashboard/manageresearch"
                      >
                        <GiArchiveResearch />

                        <span class="mx-4 font-medium">Manage Research</span>
                      </Link>
                    </>
                  )}
                  <a
                    class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                    href="#"
                  >
                    <svg
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <span class="mx-4 font-medium">Settings</span>
                  </a>
                  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                  <Link
                    class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                    href="/dashboard/addblog"
                  >
                    <FaBlogger />
                    <span class="mx-4 font-medium">Add Blog</span>
                  </Link>{" "}
                  <Link
                    class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                    href="/dashboard/addresearch"
                  >
                    <GiArchiveResearch />
                    <span class="mx-4 font-medium">Add Research</span>
                  </Link>
                </nav>
              </div>
            </aside>
          </div>
          <main className="w-9/12 p-4">{children}</main>
        </QueryClientProvider>
      </AuthProvider>
    </div>
  );
}
