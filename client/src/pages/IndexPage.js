import React, { useState, useEffect } from "react";
import Post from "../Post";

export default function IndexPage() {
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchContent, setSearchContent] = useState("");
  const [searchAuthor, setSearchAuthor] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/post")
      .then((response) => response.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, []);

  const filteredPosts = posts.filter((post) => {
    const titleMatch =
      searchTitle === "" || post.title.toLowerCase().includes(searchTitle.toLowerCase());
    const contentMatch =
      searchContent === "" || post.content.toLowerCase().includes(searchContent.toLowerCase());
    const authorMatch =
      searchAuthor === "" ||
      (post.author &&
        typeof post.author === "object" &&
        post.author.username.toLowerCase().includes(searchAuthor.toLowerCase()));
    return titleMatch && contentMatch && authorMatch;
  });

  return (
    <>
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search by title"
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search by content"
          value={searchContent}
          onChange={(e) => setSearchContent(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search by author"
          value={searchAuthor}
          onChange={(e) => setSearchAuthor(e.target.value)}
        />
      </div>
      <div className="posts-container">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => <Post key={post._id} {...post} />)
        ) : (
          <p>No posts found.</p>
        )}
      </div>
    </>
  );
}
