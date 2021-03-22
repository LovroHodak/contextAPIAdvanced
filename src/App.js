import React from 'react'
// STYLE
import "./App.css";
// SCREENS
import HomeScreen from "./screens/HomeScreen";
import OneNew from "./screens/OneNew";
import Nav from './screens/Nav'
// CONTEXT
import { NewsProvider } from "./NewsContext.js";

function App() {

  return (
    <NewsProvider>
      <div className="App">
        <Nav />
        <HomeScreen />
        <OneNew />
      </div>
    </NewsProvider>
  );
}

export default App;
