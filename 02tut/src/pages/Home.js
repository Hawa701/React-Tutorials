import React from "react";
import Feed from "../components/Feed";

const Home = ({ posts, fetchError, isLoading }) => {
  return (
    <main className="home">
      {isLoading && <p className="loadingMsg">Loading posts...</p>}
      {!isLoading && fetchError && (
        <p className="errorMsg">{`Error:${fetchError}`}</p>
      )}
      {!isLoading &&
        !fetchError &&
        (posts.length ? (
          <Feed posts={posts} />
        ) : (
          <p className="noPostMessage">No posts yet!</p>
        ))}
    </main>
  );
};

export default Home;
