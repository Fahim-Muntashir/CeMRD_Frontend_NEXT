"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth";

const MemberResearchComponent = () => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  const { user, logout } = useAuth();

  const { uid, displayName, email } = user || {};
  const handleResearchSubmit = (event) => {
    event.preventDefault();

    // Assuming the same fetch logic for submitting research
    // Adjust the URL and payload accordingly

    // Example URL:
    const apiUrl =
      "https://cemrd-online.vercel.app/api/memberresearch/postresearch";

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        title,
        link,
      }),
    })
      .then(() => {
        Swal.fire({
          title: "Research Submitted Successfully!",
          text: "You Submitted The Research!",
          icon: "success",
        });
        // Reset form fields to empty values
        setTitle("");
        setLink("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleResearchSubmit}>
        <div className="mb-3">
          <label
            className="block text-sm font-bold text-gray-700"
            htmlFor="title"
          >
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 mt-2 border rounded-md"
            placeholder="Enter title"
            required
          />
        </div>
        <div className="mb-3">
          <label
            className="block text-sm font-bold text-gray-700"
            htmlFor="link"
          >
            Link
          </label>
          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="w-full px-4 py-2 mt-2 border rounded-md"
            placeholder="Enter link"
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-primary rounded-md hover:bg-pink-600"
        >
          Add Research
        </button>
      </form>
    </div>
  );
};

export default MemberResearchComponent;
