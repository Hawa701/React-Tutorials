import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <div className="post">
      <Link to={`/post/${post.id}`}>
        <h3>{post.title}</h3>
        <span>{post.datetime}</span>
      </Link>
      <p className="postBody">
        {post.body.length <= 100 ? post.body : `${post.body.slice(0, 100)}...`}
      </p>
    </div>
  );
};

export default Post;
