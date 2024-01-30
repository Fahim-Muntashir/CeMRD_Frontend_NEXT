"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Container from "../../../../components/Shared/Container";
import Link from "next/link";

export default function Page() {
  const [researchData, setResearchData] = useState([]);
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const [userData, setUserData] = useState({});
  const [linkedin, setLinkedin] = useState("");
  const [googleScholar, setGoogleScholar] = useState("");
  const [address, setAddress] = useState("");
  const [about, setAbout] = useState("");

  const getMemberProfileData = async () => {
    try {
      const response = await fetch(
        `https://cemrd-online.vercel.app/api/member/findmemberbyemail?email=${email}`
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

  getMemberProfileData();
  console.log("data is", linkedin);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://cemrd-online.vercel.app/api/memberresearch/getresearch/${email}`
        );
        const data = await response.json();
        setResearchData(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (email) {
      fetchData();
    }
  }, [email]);

  const handleTitleClick = (link) => {
    window.open(link, "_blank");
  };

  //cl
  console.log(userData);

  return (
    <Container>
      <div class="">
        <div class="p-8 bg-white shadow mt-24">
          {" "}
          <div class="grid grid-cols-1 md:grid-cols-3">
            {" "}
            <div class="grid grid-cols-3 text-center order-last md:order-first mt-20 mb-20 md:mt-0">
              {" "}
              <img
                className="absolute object-cover w-52 h-40 rounded"
                src={userData.imgUrl}
                alt="Person"
              />
            </div>{" "}
            <div class="relative"></div>{" "}
            <div class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
              <Link
                href={"https://www.linkedin.com/in/mahmudul-hasan-moon/"}
                class="text-white py-6 px-4 uppercase rounded bg-primary hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                target="blank"
              >
                {" "}
                Connect
              </Link>{" "}
              <Link
                href={""}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white py-6 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
              >
                Message
              </Link>
            </div>{" "}
          </div>{" "}
          <div class="mt-20 text-center border-b pb-12">
            {" "}
            <h1 class="text-4xl font-medium text-gray-700">
              {userData.displayName}
            </h1>{" "}
            <p class="font-light text-gray-600 mt-3">Rangpur, Bangladesh</p>{" "}
            <p class="mt-8 text-gray-500">Founder & Chef Researcher Of CeMRD</p>{" "}
            <p class="mt-2 text-gray-500">
              {" "}
              PhD Researcher at Deakin University, Melbourne, Victoria,
              Australia{" "}
            </p>{" "}
          </div>{" "}
          <div class="mt-12 flex flex-col justify-center">
            {" "}
            <p class="text-gray-600 text-center font-light lg:px-16">
              {userData.about}
            </p>{" "}
            <Link
              href={"https://staywithmoon.com/"}
              className="text-indigo-500 py-2 px-4 text-center font-medium mt-4"
              target="blank"
            >
              {" "}
              Visit Website
            </Link>{" "}
          </div>
        </div>
      </div>

      <div className="mt-32">
        <h1 className="text-xl font-bold text-center">Researches</h1>
        {researchData.map((item, index) => (
          <div key={item._id} className="mb-4">
            <h3
              onClick={() => handleTitleClick(item.link)}
              style={{ cursor: "pointer", color: "black" }}
              className="font-semibold text-xl"
            >
              {`${index + 1}. ${item.title}`}
            </h3>
          </div>
        ))}
      </div>
    </Container>
  );
}
