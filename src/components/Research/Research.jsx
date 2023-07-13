import "./Research.scss";
import Searching from "./Searching/Searching";
import Filters from "./Filters/Filters";
import Researches from "./Researches/Researches";

const Research = (props) => {
  console.log(props);
  return (
    <main className="content bg">
      <Searching></Searching>
      <Filters filters={props.state.filters}></Filters>
      <Researches researches={props.state.researches}></Researches>
    </main>
  );
};

export default Research;
