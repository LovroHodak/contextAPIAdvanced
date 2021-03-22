import React, { useContext } from "react";
import "./HomeScreen.css";
import { NewsContext } from "../NewsContext";

export default function HomeScreen() {
  const [news, setNews, increment, decrement] = useContext(NewsContext);

  return (
    <div className="HomeScreen">
      <h1>HomeScreen.js</h1>
      <div className="one">{news.map((nnew) => {
        return (
          <div key={nnew.id}>
            <p>Title: {nnew.title}</p>
            <p>Author: {nnew.author}</p>
            <div>
              {nnew.comments.map((com) => {
                return (
                  <div key={com.id}>
                    <p>
                      COMMENT: <b>{com.value}</b>
                    </p>
                    <p>
                      COMMENT-LIKES: <b style={{color: 'red'}}>{com.likes}</b>
                    </p>
                    <button onClick={() => increment(nnew.id, com.id)}>Increment</button>
                    <button onClick={() => decrement(nnew.id, com.id)}>Increment</button>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}</div>
    </div>
  );
}
