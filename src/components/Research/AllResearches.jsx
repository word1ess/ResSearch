import "./Research.scss";
import Searching from "./Searching/Searching";
import Filters from "./Filters/Filters";
import Researches from "./Researches/Researches";
import { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import axios from "axios";

const AllResearches = (props) => {
  /* let { email } = useContext(AuthContext)
  console.log(email) */
  return (
    <main className="content bg">
      <Searching></Searching>
      <Filters filters={props.state.filters}></Filters>
      <Researches researches={props.state.researches}></Researches>
    </main>
  );
};

export default AllResearches;
