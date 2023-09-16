import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const EditPost = ({
  posts,
  handleEdit,
  editTitle,
  setEditTitle,
  editBody,
  setEditBody,
}) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id == id);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [posts, setEditTitle, setEditBody]);

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
