import data from "../data/posts.json";
import Masonry from "react-masonry-css";

const Home = () => {
  return (
    <main className="flex justify-between ml-8 overflow-y-scroll">
      <div className="masonry-container">
        <Masonry
          breakpointCols={2}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {data.map((post) => (
            <div key={post.id} className="post-card">
              <div>
                <h1>{post.community}</h1>
                <h1>by @{post.author}</h1>
              </div>
              <div className="post-img">
                <img src={post.image} alt={post.caption} />
              </div>
              <div>
                <h1>{post.caption}</h1>
                <h1>{post.votes} upvotes</h1>
              </div>
            </div>
          ))}
        </Masonry>
      </div>
      <div className="right-sidebar">
        <h2>Manas Bajpai</h2>
        <div>
          <h1>Recommended Communities</h1>
          <div className="flex flex-col">
            <div className="community-card">
              <h3>Community 1</h3>
              <p>Community Description</p>
            </div>
            <div className="community-card">
              <h3>Community 2</h3>
              <p>Community Description</p>
            </div>
            <div className="community-card">
              <h3>Community 3</h3>
              <p>Community Description</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
