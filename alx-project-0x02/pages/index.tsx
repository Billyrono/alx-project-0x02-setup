import type { NextPage } from "next";
import Header from "@/components/layout/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <h1 className="text-2xl font-bold text-center mt-10">
        Welcome to ALX Next.js Project
      </h1>
    </div>
  );
};

export default Home;
