import React from "react";
import Link from "next/link";

function Nav(){
  return (
    <ul className="flex m-5 p-3 gap-5">
      <li>
        <Link href="/">
          <button>Home</button>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <button>About Page</button>
        </Link>
      </li>
      <li>
        <Link href="/service">
          <button>Service Page</button>
        </Link>
      </li>
      <li>
        <Link href="/blog">
          <button>Blog Page</button>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <button>Contact Page</button>
        </Link>
      </li>
    </ul>
  );
}

export default Nav;