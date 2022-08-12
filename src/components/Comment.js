import React, { useState, useEffect } from "react";
import "./Comment.css";
export default function Comment() {
  const [comments, setComments] = useState([]);
  const [showComment, setShowComment] = useState(false);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((input) => setComments(input));
  }, []);
  const toggleComment = () => {
    setShowComment((prev) => !prev);
  };
  return (
    <div className="comment">
      <button className="comment-button" onClick={toggleComment}>
        Comments
      </button>
      {showComment
        ? comments.map((comment) => {
            return (
              <div key={comment.id} className="individual-comment">
                <div className="actual-comment">
                  {comment.id}:{comment.body}
                </div>
                <div className="email">-{comment.email}</div>
              </div>
            );
          })
        : null}
    </div>
  );
}
