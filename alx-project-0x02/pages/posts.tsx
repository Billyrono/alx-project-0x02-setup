import Header from "@/components/layout/Header";
import { NextPage } from "next";

const Posts: NextPage = () => {
  return (
    <div>
      <Header />
      <h1 className="text-2xl font-bold text-center mt-10">
        This is the Posts page.
      </h1>
    </div>
  );
};

export default Posts;
