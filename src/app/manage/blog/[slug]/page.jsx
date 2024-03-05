"use client";

import { useState, useEffect } from "react";

async function getBlog(slug) {
  const response = await fetch(
    `https://65e70ec753d564627a8dc5b4.mockapi.io/api/1/users/${slug}`
  );

  if (!response.ok) {
    throw new Error("cannot fetch blog");
  }
  return response.json();
}

export default function BlogPage({ params }) {
  const [blogState, setBlogState] = useState({
    name: "",
  });
  const initBlog = async () => {
    try {
      const result = await getBlog(params.slug);
      setBlogState(result);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBlogState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form Submiited", blogState);
    try {
      const response = await fetch(
        `https://65e70ec753d564627a8dc5b4.mockapi.io/api/1/users/${slug}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(blogState),
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const responseData = await response.json();
      console.log("Form submitted susccessfully", responseData);
    } catch (error) {
      console.log("there was a problem with the fetch operation", error);
    }
  };

  useEffect(() => {
    initBlog();
  }, []);

  return (
    <div>
      ID: {params.slug}
      <div>
        Blog name: {blogState.name}
        <form action={handleSubmit}>
          <input
            type="text"
            name="name"
            value={blogState.name}
            onChange={handleChange}
          ></input>
          <button>update</button>
        </form>
      </div>
      <div>avatar: {blogState.avatar}</div>
    </div>
  );
}
