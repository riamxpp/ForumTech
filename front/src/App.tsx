import React from "react";
import "./App.css";
import Feed from "./components/Feed/Feed";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ForumStorage } from "./Context/ForumContext";
import IndividualQuestion from "./components/Feed/IndividualQuestion/IndividualQuestion";
import Login from "./components/Login/Login";
import Cadastro from "./components/Cadastro/Cadastro";

function App() {
  return (
    <>
      <ForumStorage>
        <Router>
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="feed" element={<Feed />} />
            <Route path=":name/:language" element={<IndividualQuestion />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Cadastro />} />
          </Routes>
        </Router>
      </ForumStorage>
    </>
  );
}

export default App;
