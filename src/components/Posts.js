import React, { useEffect, useState } from "react";
import "./Posts.css";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(20);

  const handleClick = () => {
    setLimit((prev) => prev + prev);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((item) => setPosts(item));
  }, []);

  return (
    <div className="posts">
      {posts.slice(0, limit).map((post) => {
        return (
          <div className="post" key={post.id}>
            {post.body}
          </div>
        );
      })}

      <button className="see-more-button" onClick={handleClick}>
        See More....
      </button>
    </div>
  );
}
