"use client";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import Logo from "../../public/Images/logo.png";
// import useAuth from "../../hooks/useAuth";
import { RxAvatar } from "react-icons/rx";
import { IoLogOut } from "react-icons/io5";
import userRole from "../../hooks/userRole";
import Link from "next/link";
import useAuth from "../../hooks/useAuth";
import Image from "next/image";
import toast from "react-hot-toast";

const Nav = () => {
  const { user, logOut } = useAuth();

  const { uid, displayName, email } = user || {};

  const [role] = userRole();

  const normalUser = role === "user";

  console.log(normalUser);

  const handleLogOut = async () => {
    await logOut();
    toast
      .success("Logout Successfully!")
      .then(() => {
        localStorage.removeItem("cemrd-access-token");
      })
      .catch((error) => console.log(error));
  };

  return (
    <Navbar
      fluid
      rounded
      className="fixed xl:px-20 md:px-10 sm:px-2 px-4 w-full top-0 z-50 bg-white shadow-md"
    >
      <Navbar.Brand href="/">
        <Image src={Logo} width={200} />{" "}
      </Navbar.Brand>
      <div className="flex md:order-2">
        {uid ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              // <Avatar
              //   alt="User settings"
              //   img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              //   rounded
              // />
              <RxAvatar className="text-4xl text-gray-800" />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{displayName}</span>
              <span className="block truncate text-sm font-medium">
                {user?.email}
              </span>
            </Dropdown.Header>

            {normalUser || (
              <>
                <Dropdown.Item>
                  <Link to="dashboard">DashBoard</Link>
                </Dropdown.Item>

                <Dropdown.Item>
                  <Link to="dashboard/profile">Profile</Link>
                </Dropdown.Item>
              </>
            )}

            <Dropdown.Divider />
            <button
              className="bg-gray-100 font-bold w-full"
              onClick={handleLogOut}
            >
              <Dropdown.Item>
                Logout <IoLogOut className="text-2xl ms-3" />
              </Dropdown.Item>
            </button>
          </Dropdown>
        ) : (
          <>
            <Link
              className="mt-1 w-full bg-[white] px-6 py-3 text-sm font-bold uppercase tracking-wide text-black hover:text-white transition-none hover:bg-blue-900 sm:mt-0 sm:w-auto sm:shrink-0"
              href="/login"
            >
              Login
            </Link>
            <Link
              className="mt-1 w-full bg-[#1c1748] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-blue-900 sm:mt-0 sm:w-auto sm:shrink-0"
              href="/signup"
            >
              Sign Up
            </Link>
          </>
        )}

        <Navbar.Toggle />
      </div>{" "}
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="about">About</Navbar.Link>
        <Navbar.Link href="events">Events</Navbar.Link>

        <Navbar.Link href="research">Research</Navbar.Link>
        <Navbar.Link href="team">Team</Navbar.Link>
        <Navbar.Link href="blog">Blog</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
