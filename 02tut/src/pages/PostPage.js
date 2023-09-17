import React from "react";
import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import api from "../api/post";
import { useNavigate } from "react-router-dom";

const PostPage = () => {
  const { posts, setPosts } = useContext(DataContext);
  const { id } = useParams();
  const post = posts.find((post) => post.id == id);
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const postList = posts.filter((post) => post.id != id);
      setPosts(postList);
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <main className="postPage">
      {post && (
        <>
          <h3>{post.title}</h3>
          <span>{post.datetime}</span>
          <p className="postBody">{post.body}</p>
          <div className="btn">
            <Link to={`/edit/${post.id}`}>
              <button className="editBtn">Edit Post</button>
            </Link>
            <button className="deleteBtn" onClick={() => handleDelete(id)}>
              Delete Post
            </button>
          </div>
        </>
      )}
      {!post && (
        <>
          <h3>Post Not Found!</h3>
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
