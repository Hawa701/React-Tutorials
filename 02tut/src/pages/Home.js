import React from "react";
import Feed from "../components/Feed";

const Home = ({ posts }) => {
  return (
    <main className="home">
      {posts.length ? (
        <Feed posts={posts} />
      ) : (
        <p className="noPostMessage">No posts yet!</p>
      )}
    </main>
  );
};

export default Home;
