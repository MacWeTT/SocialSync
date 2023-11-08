import PostCard from "../common/components/PostCard";

const data = [
  {
    id: 1,
    title: "Post 1",
    content: "Post 1 Description",
  },
  {
    id: 2,
    title: "Post 2",
    content: "Post 2 Description",
  },
  {
    id: 3,
    title: "Post 3",
    content: "Post 3 Description",
  },
];

const Home = () => {
  return (
    <main>
      {data.map((post) => (
        <PostCard data={post} key={post.id} />
      ))}
    </main>
  );
};

export default Home;
