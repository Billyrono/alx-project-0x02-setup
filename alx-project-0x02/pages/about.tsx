import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";
import { NextPage } from "next";

const about: NextPage = () => {
  return (
    <div>
      <Header />
      <h1 className="text-2xl font-bold text-center mt-10">About Page</h1>
      <div className="flex justify-center gap-4 mt-6">
        <Button size="small" shape="rounded-sm">
          Small Rounded-sm
        </Button>
        <Button size="medium" shape="rounded-md">
          Medium Rounded-md
        </Button>
        <Button size="large" shape="rounded-full">
          Large Rounded-full
        </Button>
      </div>
    </div>
  );
};

export default about;
