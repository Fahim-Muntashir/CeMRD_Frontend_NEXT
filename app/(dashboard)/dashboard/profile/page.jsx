"use client";
import { useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import toast from "react-hot-toast";

const page = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-700 mx-auto mt-40"></div>
    );
  }

  const { uid, displayName: initialDisplayName, email } = user || {};

  const [userData, setUserData] = useState({});

  const [displayName, setDisplayName] = useState(initialDisplayName);
  const [linkedin, setLinkedin] = useState("");
  const [googleScholar, setGoogleScholar] = useState("");
  const [address, setAddress] = useState("");
  const [about, setAbout] = useState("");
  const [isEditMode, setEditMode] = useState(false);

  const getMemberProfileData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/member/findmemberbyemail?email=${email}`
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data.data);
        setUserData(data.data);
        setLinkedin(data.data.linkedin); // Set the linkedin state here
        setGoogleScholar(data.data.googleScholar); // Set the linkedin state here
        setAddress(data.data.address); // Set the linkedin state here
        setAbout(data.data.about); // Set the linkedin state here
        console.log("Profile data fetched successfully");
      } else {
        console.error("Failed to fetch profile data");
      }
    } catch (error) {
      console.error("Error fetching profile data", error);
    }
  };

  const handleUpdateProfile = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/member/updatememberprofile/${email}`, // Use email in the URL
        {
          method: "PUT", // Use PUT for updating
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            displayName,
            linkedin,
            googleScholar,
            address,
            about,
          }),
        }
      );

      if (response.ok) {
        console.log("Profile updated successfully");
        toast.success("Profile Update With Sucessfully");
      } else {
        console.error("Failed to update profile");
      }
    } catch (error) {
      console.error("Error updating profile", error);
    }
  };

  const editAccount = () => {
    getMemberProfileData();
    toast.success("Now Update your profile with new data");
    setEditMode(true);
  };

  // user data is

  return (
    <div>
      <section className="py-1 bg-blueGray-50">
        <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold">
                  My account
                </h6>
                <button
                  className={`bg-primary text-white 
                   active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150`}
                  type="button"
                  onClick={() => editAccount()}
                >
                  Edit Account
                </button>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form>
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  User Information
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="username"
                      >
                        Username
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                        readOnly={!isEditMode}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={email}
                        readOnly
                      />
                    </div>
                  </div>
                </div>

                <hr className="mt-6 border-b-1 border-blueGray-300" />

                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Contact Information
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="linkedin"
                      >
                        LinkedIn
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={linkedin}
                        readOnly={!isEditMode}
                        onChange={(e) => setLinkedin(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="googleScholar"
                      >
                        Google Scholar
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={googleScholar}
                        onChange={(e) => setGoogleScholar(e.target.value)}
                        readOnly={!isEditMode}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="address"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={address}
                        readOnly={!isEditMode}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <hr className="mt-6 border-b-1 border-blueGray-300" />

                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  About Me
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="aboutMe"
                      >
                        About me
                      </label>
                      <textarea
                        onChange={(e) => setAbout(e.target.value)}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="aboutMe"
                        id="aboutMe"
                        cols="30"
                        rows="10"
                        readOnly={!isEditMode}
                        maxLength="400"
                        value={about}
                        // Add value and onChange props if you want to track changes
                      >
                        Default text goes here...
                      </textarea>
                    </div>
                  </div>
                </div>
              </form>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  className="bg-primary text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={handleUpdateProfile}
                >
                  Update Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
