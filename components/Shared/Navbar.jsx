import { Avatar, Dropdown, Navbar } from "flowbite-react";
import Logo from "../../../public/Images/logo.png";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { RxAvatar } from "react-icons/rx";
import { IoLogOut } from "react-icons/io5";
import userRole from "../../hooks/userRole";

const Nav = () => {
  const { user, logOut } = useAuth();
  const [role] = userRole();

  const normalUser = role === "user";

  console.log(normalUser);

  const handleLogOut = () => {
    logOut()
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
        <img src={Logo} width={200} height={500} alt="Picture of the author" />
      </Navbar.Brand>
      <div className="flex md:order-2">
        {user ? (
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
              <span className="block text-sm">{user?.displayName}</span>
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
          <Link
            to="login"
            className="bg-primary text-white font-bold text-2xl px-20 py-4"
          >
            Login
          </Link>
        )}

        <Navbar.Toggle />
      </div>{" "}
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="about">About</Navbar.Link>
        <Navbar.Link href="events">Events</Navbar.Link>
        <Navbar.Link href="login">login</Navbar.Link>
        <Navbar.Link href="research">Research</Navbar.Link>
        <Navbar.Link href="team">Team</Navbar.Link>
        <Navbar.Link href="blog">Blog</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
