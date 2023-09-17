import React from "react";
import Feed from "../components/Feed";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const Home = () => {
  const { searchResults, fetchError, isLoading } = useContext(DataContext);
  return (
    <main className="home">
      {isLoading && <p className="loadingMsg">Loading posts...</p>}
      {!isLoading && fetchError && (
        <p className="errorMsg">{`Error:${fetchError}`}</p>
      )}
      {!isLoading &&
        !fetchError &&
        (searchResults.length ? (
          <Feed posts={searchResults} />
        ) : (
          <p className="noPostMessage">No posts!</p>
        ))}
    </main>
  );
};

export default Home;
