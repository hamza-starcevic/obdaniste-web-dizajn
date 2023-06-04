import React, { useState, useEffect } from "react";
import axios from "axios";

import "./admin.css";
const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleCreatePost = async () => {
    try {
      console.log(title);
      const response = await axios.post("http://localhost:8001/posts", {
        naslov: title,
        sadrzaj: content,
        datumObjave: new Date().toISOString(),
      });
      console.log(response.data);
      // Reset form fields after successful post creation
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8001/users");
      setUsers(response.data.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:8001/users/${userId}`);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="admin-panel">
      <h2>Create Post</h2>
      <form>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleCreatePost}
        >
          Create Post
        </button>
      </form>
      <h2>User List</h2>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul className="user-lis">
          {users.map((user) => (
            <li className="user-item" key={user.id}>
              {user.imeRoditelja} {user.prezime} {user.email + " "}
              <button
                className="delete-button"
                onClick={() => deleteUser(user.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminPanel;
