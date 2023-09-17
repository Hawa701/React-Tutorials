import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import format from "date-fns/format";
import api from "../api/post";

const EditPost = () => {
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const { posts, setPosts } = useContext(DataContext);
  const { id } = useParams();
  const post = posts.find((post) => post.id == id);
  const navigate = useNavigate();

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [posts, setEditTitle, setEditBody]);

  const handleEdit = async (id) => {
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const updatedPost = { id, title: editTitle, datetime, body: editBody };
    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      setPosts(
        posts.map((post) => (post.id === id ? { ...response.data } : post))
      );
      setEditTitle("");
      setEditBody("");
      navigate("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <main className="editPost">
      {editTitle && (
        <>
          <h2>Edit Post</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              required
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <label htmlFor="post">Post:</label>
            <textarea
              required
              id="post"
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
            />
            <button
              type="submit"
              onClick={() => {
                handleEdit(post.id);
              }}
            >
              Edit
            </button>
          </form>
        </>
      )}
      {!editTitle && (
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

export default EditPost;
