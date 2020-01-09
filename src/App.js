import React, { useEffect } from "react";
// CSS and Js
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

// Components
import SearchBar from "./components/layouts/SearchBar";

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <div className="App">
      <SearchBar />
    </div>
  );
};

export default App;
