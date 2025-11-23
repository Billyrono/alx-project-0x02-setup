import Header from "@/components/layout/Header";
import { NextPage } from "next";

const about: NextPage = () => {
  return (
    <div>
      <Header />
      <h1 className="text-2xl font-bold text-center mt-10">About Page</h1>
    </div>
  );
};

export default about;
