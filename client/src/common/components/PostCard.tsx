import { PostCardProps } from "../types/interfaces";

const PostCard = ({ data }: PostCardProps) => {
  return (
    <div>
      <h1>{data.id}</h1>
      <h2>{data.title}</h2>
      <p>{data.content}</p>
    </div>
  );
};

export default PostCard;
