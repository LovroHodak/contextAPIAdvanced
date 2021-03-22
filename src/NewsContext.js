import React, { useState, createContext } from "react";

export const NewsContext = createContext();

export const NewsProvider = (props) => {
  const [news, setNews] = useState([
    {
      title: "CoronaVirus",
      author: "Hodak",
      id: 1,
      comments: [
        { value: "I agree 100%", likes: 2, id: 123 },
        { value: "You are right", likes: 4, id: 124 },
      ],
    },
    {
      title: "FootBall",
      author: "Lovro",
      id: 2,
      comments: [
        { value: "You are wrong", likes: 12, id: 125 },
        { value: "What are you talking about", likes: 14, id: 126 },
      ],
    },
  ]);

  const increment = (Nid, Cid) => {
    console.log("I WORKZZ Increment", Nid, Cid);
    const newNews = news.map((newNew) => {
      if (newNew.id === Nid) {
        const updatedNew = {
          ...newNew,
          comments: newNew.comments.map((ouh) => {
            if (ouh.id === Cid) {
              const updateOuh = {
                ...ouh,
                likes: ouh.likes + 1,
              };
              return updateOuh;
            }
            return ouh;
          }),
        };
        return updatedNew;
      }
      return newNew;
    });
    setNews(newNews);
  };

  const decrement = (Nid, Cid) => {
    console.log("I WORKZZ Decrement", Nid, Cid);
    const newNews = news.map((newNew) => {
      if (newNew.id === Nid) {
        const updatedNew = {
          ...newNew,
          comments: newNew.comments.map((ouh) => {
            if (ouh.id === Cid) {
              const updateOuh = {
                ...ouh,
                likes: ouh.likes - 1,
              };
              return updateOuh;
            }
            return ouh;
          }),
        };
        return updatedNew;
      }
      return newNew;
    });
    setNews(newNews);
  };

  return (
    <NewsContext.Provider value={[news, setNews, increment, decrement]}>
      {props.children}
    </NewsContext.Provider>
  );
};
