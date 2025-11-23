import { type PostProps } from "@/interfaces";

const PostCard = ({ userId, content, title }: PostProps) => {
  return (
    <div className="border rounded-md shadow p-4 hover:shadow-lg transition">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-2">{content}</p>
      <span className="text-sm text-gray-500">User ID: {userId}</span>
    </div>
  );
};

export default PostCard;
