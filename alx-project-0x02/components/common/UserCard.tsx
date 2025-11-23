import React from "react";
import { type UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-sm text-gray-700">{email}</p>
      <p className="text-sm text-gray-600">
        {address.street}, {address.city}
      </p>
    </div>
  );
};

export default UserCard;
