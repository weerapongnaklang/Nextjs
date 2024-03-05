"use client";
import { useEffect, useState } from "react";
import { submitForm } from "./action";
async function getBlog() {
  const response = await fetch(
    "https://65e70ec753d564627a8dc5b4.mockapi.io/api/1/users"
  );

  if (!response.ok) {
    throw new Error("cannot fetch blog");
  }
  return response.json();
}
export default function test() {
  const [blogState, setBlogState] = useState([]);

 

  const initBlog = async () => {
    try {
      const result = await getBlog();
      setBlogState(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    initBlog();
    console.log("use effect");
  }, []);
  return (
    <div>
      <h1> This is Test page2</h1>
      {blogState.map((blog, index) => (
        <div key={index}>
          {blog.id}
          {blog.name}
        </div>
      ))}

      <form action={submitForm}>
        email <input name="email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

/*
ไม่มีคอนเทนต์จริงๆ เพราะไป call api มาแสดง เรียกว่า client component
และ  useState, useEffect ใช้กับ server component ไม่ได้
*/
