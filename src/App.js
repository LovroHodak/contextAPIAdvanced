import React from "react";
// STYLE
import "./App.css";
// SCREENS
import HomeScreen from "./screens/HomeScreen";
import OneNew from "./screens/OneNew";
import Nav from "./screens/Nav";
// CONTEXT
import { NewsProvider } from "./NewsContext.js";
import AddNews from "./screens/AddNews";

function App() {
  return (
    <NewsProvider>
      <div className="App">
        <div className='firstDiv'>
          <Nav />
          <OneNew />
        </div>
        <HomeScreen />
        <AddNews />
      </div>
    </NewsProvider>
  );
}

export default App;
