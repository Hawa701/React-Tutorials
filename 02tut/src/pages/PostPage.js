import React from "react";
import { useParams, Link } from "react-router-dom";

const PostPage = ({ posts, handleDelete }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id == id);
  return (
    <main className="postPage">
      {post && (
        <>
          <h3>{post.title}</h3>
          <span>{post.datetime}</span>
          <p className="postBody">{post.body}</p>
          <button onClick={() => handleDelete(id)}>Delete Post</button>
        </>
      )}
      {!post && (
        <>
          <h3>Post not found!</h3>
          <p>Looks like the post doesn't exist or has been deleted.</p>
          <p>
            <Link to="/">Go back to Homepage</Link>
          </p>
        </>
      )}
    </main>
  );
};

export default PostPage;
