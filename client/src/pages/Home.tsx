import data from "../data/posts.json";
import Masonry from "react-masonry-css";
import PostCard from "../common/components/PostCard/PostCard";

const Home = () => {
  return (
    <main className="flex justify-between ml-8">
      <div className="masonry-container">
        <Masonry
          breakpointCols={2}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {data.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </Masonry>
      </div>
    </main>
  );
};

export default Home;
