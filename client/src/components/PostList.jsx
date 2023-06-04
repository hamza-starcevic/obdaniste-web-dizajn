import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./PostList.css";
const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch the posts from the backend API
    const fetchPosts = async () => {
      try {
        const response = await Axios.get("http://localhost:8001/posts");
        setPosts(response.data.posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="post-list">
      <h1>Obavjesti</h1>
      {posts.length === 0 ? (
        <h2>No posts found.</h2>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h2>{post.naslov}</h2>
              <p>{post.sadrzaj}</p>
              <p>{post.datumObjave}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostList;
