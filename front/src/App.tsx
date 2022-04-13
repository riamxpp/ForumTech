import React from "react";
import "./App.css";
import Feed from "./components/Feed/Feed";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ForumStorage } from "./Context/ForumContext";
import IndividualQuestion from "./components/Feed/IndividualQuestion/IndividualQuestion";

function App() {
  return (
    <>
      <ForumStorage>
        <Router>
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="feed" element={<Feed />} />
            <Route path=":name/:language" element={<IndividualQuestion />} />
          </Routes>
        </Router>
      </ForumStorage>
    </>
  );
}

export default App;
