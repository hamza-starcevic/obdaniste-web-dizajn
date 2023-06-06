import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./PostList.css";
import Comments from "./Comments";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState("");
  const [isModal, setIsModal] = useState(false);
  const [post, setPost] = useState("");

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

  async function handlePostClick(post) {
    try {
      const response = await Axios.get(
        `http://localhost:8001/comments/${post.id}`
      );
      setComments(response.data.comments);
      setPost(post);
      console.log(comments);
      setIsModal(true);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  }

  const handleCloseModal = () => {
    setIsModal(false);
  };

  return (
    <div className="post-list">
      <h1>Obavjesti</h1>
      {posts.length === 0 ? (
        <h2>No posts found.</h2>
      ) : (
        <ul>
          {posts.reverse().map((post) => (
            <li key={post.id}>
              <h2>{post.naslov}</h2>
              <p>{post.sadrzaj}</p>
              <p>{post.datumObjave}</p>
              <button
                className="btn btn-primary"
                onClick={() => handlePostClick(post)}
              >
                View Comments
              </button>
            </li>
          ))}
        </ul>
      )}

      {isModal && (
        <Comments
          comments={comments}
          onCloseModal={handleCloseModal}
          post={post}
        />
      )}
    </div>
  );
};

export default PostList;
