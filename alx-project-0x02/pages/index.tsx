// pages/index.tsx
import type { NextPage } from "next";
import Header from "@/components/layout/Header";
// @ts-ignore
import Card from "@/components/common/Card";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <main className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card title="Card 1" content="This is the content of card 1." />
        <Card title="Card 2" content="This is the content of card 2." />
        <Card title="Card 3" content="This is the content of card 3." />
      </main>
    </div>
  );
};

export default Home;
