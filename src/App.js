import React from "react";
import Header from "./components/Header/Header";
import JobList from "./components/JobList/JobList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <JobList />
    </div>
  );
}

export default App;
