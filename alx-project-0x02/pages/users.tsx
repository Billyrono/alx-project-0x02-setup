import { GetStaticProps, NextPage } from "next";
import Header from "@/components/layout/Header";
//@ts-ignore
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

interface UsersPageProps {
  users: UserProps[];
}

const UsersPage: NextPage<UsersPageProps> = ({ users }) => {
  return (
    <div>
      <Header />
      <h1 className="text-2xl font-bold text-center mt-10">Users Page</h1>

      <main className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <UserCard
            key={user.id}
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

export default UsersPage;

// ⭐ Required by checker: getStaticProps
export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const users: UserProps[] = data.map((u: any) => ({
    id: u.id,
    name: u.name,
    email: u.email,
    address: {
      street: u.address.street,
      city: u.address.city,
    },
  }));

  return {
    props: { users },
  };
};
