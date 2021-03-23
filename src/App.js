import React, { useState } from "react";
// STYLE
import "./App.css";
// SCREENS
import HomeScreen from "./screens/HomeScreen";
import OneNew from "./screens/OneNew";
import Nav from "./screens/Nav";
import AddNews from "./screens/AddNews";
import Modals from "./screens/Modals";
// CONTEXT
import { NewsProvider } from "./NewsContext.js";


function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NewsProvider>
      <div className="App">

        <div className="firstDiv">
          <Nav />
          <OneNew />
        </div>

        <HomeScreen />

        <div className="firstDiv">
          <AddNews />
          <div className="BUTTON_WRAPPER_STYLES">
            <h4>I had to add (div id='portal')(/div) inside INDEX.HTML</h4>
            <button onClick={() => setIsOpen(true)}>Open Modal</button>

            <Modals open={isOpen} onClose={() => setIsOpen(false)}>
              <p>Fancy Modal</p>
              <AddNews />
            </Modals>
          </div>
        </div>

      </div>
    </NewsProvider>
  );
}

export default App;
