import React, { useState, useContext } from "react";
import "./AddNews.css";
import { NewsContext } from "../NewsContext";

export default function AddNews() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const [news, setNews] = useContext(NewsContext);

  let uniqeId = () => {
    return "_" + Math.random().toString(36).substr(2, 9);
  };

  const updateTitle = (e) => {
    setTitle(e.target.value);
  };

  const updateAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const addNewNews = (e) => {
    e.preventDefault();
    setNews((prevNews) => [
      ...prevNews,
      {
        title: title,
        author: author,
        id: uniqeId(),
        comments: [
          { value: "This is your first news", likes: 0, id: uniqeId() },
          { value: "You are new author", likes: 0, id: uniqeId() },
        ],
      },
    ]);
    console.log(news)
    setTitle('')
    setAuthor('')
  };

  return (
    <div className="AddNews">
      <h1>AddNews.js</h1>
      <form onSubmit={addNewNews}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={updateTitle}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={author}
          onChange={updateAuthor}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
