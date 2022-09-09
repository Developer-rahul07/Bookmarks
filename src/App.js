import { fromJSON } from "postcss";
import React from "react";
import { Router } from "react-router-dom";
import "./App.css";
import Sidebar from "./comp/Sidebar.js";
import{BrowseRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
    <Sidebar />
    </Router>
  );
  
}

export default App;