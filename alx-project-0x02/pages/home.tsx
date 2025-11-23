import Header from "@/components/layout/Header";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <h1 className="text-2xl font-bold text-center mt-10">Home Page</h1>
    </div>
  );
};

export default Home;
