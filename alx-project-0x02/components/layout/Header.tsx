// components/layout/Header.tsx
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <h1 className="text-xl font-semibold">ALX Project Header</h1>
      <li>
        <a href="/home" className="mr-4 hover:underline">
          Home
        </a>
        <a href="/about" className="mr-4hover:underline">
          About
        </a>
      </li>
    </header>
  );
};

export default Header;
