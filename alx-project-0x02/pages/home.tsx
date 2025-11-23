// @ts-ignore
import Card from "@/components/common/Card";
import Header from "@/components/layout/Header";
import { NextPage } from "next";
import { useState } from "react";
import PostModal from "@/components/common/PostModal";
import { CardProps } from "@/interfaces";

const Home: NextPage = () => {
  const [posts, setPosts] = useState<CardProps[]>([
    { title: "Card 1", content: "This is the content of card 1." },
    { title: "Card 2", content: "This is the content of card 2." },
    { title: "Card 3", content: "This is the content of card 3." },
  ]);

  const handleAddPost = (newPost: CardProps) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div>
      <Header />
      <h1 className="text-2xl font-bold text-center mt-10">Home Page</h1>
      <main className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <PostModal onAddPost={handleAddPost} />
        {posts.map((post, idx) => (
          <Card key={idx} title={post.title} content={post.content} />
        ))}
      </main>
    </div>
  );
};

export default Home;
