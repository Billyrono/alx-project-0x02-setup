// @ts-ignore
import Card from "@/components/common/Card";
import Header from "@/components/layout/Header";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <h1 className="text-2xl font-bold text-center mt-10">Home Page</h1>
      <main className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card title="Card 1" content="This is the content of card 1." />
        <Card title="Card 2" content="This is the content of card 2." />
        <Card title="Card 3" content="This is the content of card 3." />
      </main>
    </div>
  );
};

export default Home;
