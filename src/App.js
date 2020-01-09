import React, { useEffect, Fragment } from "react";
// CSS and Js
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

// Components
import SearchBar from "./components/layouts/SearchBar";
import Logs from "./components/logs/Logs";
import AddBtn from "./components/layouts/AddBtn";
import AddLogModel from "./components/logs/AddLogModel";
import EditLogModel from "./components/logs/EditLogModel";
import AddTechModel from "./components/techs/AddTechModel";
import TechListModal from "./components/techs/TechListModal";

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <Fragment>
      <SearchBar />
      <div className="container">
        <AddBtn />
        <AddLogModel />
        <EditLogModel />
        <AddTechModel />
        <TechListModal />

        <Logs />
      </div>
    </Fragment>
  );
};

export default App;
