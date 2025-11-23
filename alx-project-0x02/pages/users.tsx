import { UserProps } from "@/interfaces";
//@ts-ignore
import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { NextPage, GetStaticProps } from "next";

interface UsersPageProps {
  users: UserProps[];
}

const Users: NextPage<UsersPageProps> = ({ users }) => {
  return (
    <div>
      <Header />
      <h1 className="text-2xl font-bold text-center mt-10">Users</h1>

      <main className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user, idx) => (
          <UserCard
            key={idx}
            name={user.name}
            email={user.email}
            address={user.address}
          />
        ))}
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const users: UserProps[] = data.map((user: any) => ({
    name: user.name,
    email: user.email,
    address: user.address.street + ", " + user.address.city,
  }));

  return {
    props: { users },
    revalidate: 60, // optional: rebuild after 60s
  };
};

export default Users;
