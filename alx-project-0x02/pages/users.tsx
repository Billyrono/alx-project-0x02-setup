import { type UserProps } from "@/interfaces";
//@ts-ignore
import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { NextPage, GetStaticProps } from "next";

interface UsersPageProps {
  users: UserProps[];
}

const Users = ({ users }: UsersPageProps) => {
  return (
    <div>
      <Header />
      <h1 className="text-2xl font-bold text-center mt-10">Users Page</h1>

      <main className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user, idx) => (
          <UserCard
            key={idx}
            id={user.id}
            name={user.name}
            email={user.email}
            address={user.address}
          />
        ))}
      </main>
    </div>
  );
};

function getStaticProps() {}

export const getStaticPropsActual: GetStaticProps = async () => {
  const res = await fetch("https://randomuser.me/api/?results=12");
  const data = await res.json();

  // Map API data to your UserProps
  const users: UserProps[] = data.results.map((u: any, idx: number) => ({
    id: idx + 1,
    name: `${u.name.first} ${u.name.last}`,
    email: u.email,
    address: {
      street: u.location.street.name + " " + u.location.street.number,
      city: u.location.city,
    },
  }));

  return {
    props: { users },
    revalidate: 60,
  };
};

export { getStaticPropsActual as getStaticProps };

export default Users;
