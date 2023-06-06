import React, { useState } from "react";
import "./comments.css";
import axios from "axios";

function Comments({ comments, onCloseModal, post }) {
  const [commentTrue, setCommentTrue] = useState(comments);
  const [commentContent, setCommentContent] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    setCommentTrue((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        content: commentContent,
      },
    ]);
    try {
      const data = await axios.post("http://localhost:8001/comment", {
        content: commentContent,
        postId: post.id,
      });
      setCommentContent("");
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="modal2">
      <div className="modal-content2">
        <h1>{post.naslov}</h1>
        <h2>{post.sadrzaj}</h2>
        <h2>Komentari:</h2>
        {commentTrue.length > 0 ? (
          <ul>
            {commentTrue.map((commentM) => (
              <li key={commentM.id}>
                <h4>{commentM.content}</h4>
              </li>
            ))}
          </ul>
        ) : (
          <>
            <h2>{post.naslov}</h2>
            <h2>Nema komentara.</h2>
          </>
        )}
        {/* Add a field that submits a new comment */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="comment">Ostavite komentar</label>
            <input
              type="text"
              className="form-control"
              id="comment"
              placeholder="Vas komentar"
              value={commentContent}
              onChange={(e) => setCommentContent(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <button className="btn btn-danger" onClick={onCloseModal}>
          Zatvori
        </button>
      </div>
    </div>
  );
}
export default Comments;
