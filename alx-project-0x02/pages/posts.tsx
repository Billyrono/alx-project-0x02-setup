import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";
import { GetStaticProps, NextPage } from "next";
import { useEffect, useState } from "react";

const Posts: NextPage = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/posts?limit=12");
        const data = await res.json();

        const formattedPosts = data.posts.map((post: any) => ({
          title: post.title,
          content: post.body,
          userId: post.userId,
        }));
        setPosts(formattedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <Header />
      <h1 className="text-2xl font-bold text-center mt-10">Posts Page</h1>

      <main className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, idx) => (
          <PostCard
            key={idx}
            title={post.title}
            content={post.content}
            userId={post.userId}
          />
        ))}
      </main>
    </div>
  );
};

export default Posts;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://dummyjson.com/posts?limit=12");
  const data = await res.json();

  const posts: PostProps[] = data.posts.map((p: any) => ({
    title: p.title,
    content: p.body,
    userId: p.userId,
  }));

  return {
    props: { posts },
  };
};
