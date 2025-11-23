import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <Link href="/home" className="mr-4 hover:underline">
        Home
      </Link>
      <Link href="/about" className="mr-4 hover:underline">
        About
      </Link>
      <Link href="/posts" className="mr-4 hover:underline">
        Posts{" "}
      </Link>
      <Link href="/users" className="hover:underline">
        Users
      </Link>
    </header>
  );
};

export default Header;
