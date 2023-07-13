import "./Index.scss";
import Intro from "./Intro/Intro";
import Introduce from "./Introduce/Introduce";
import Outro from "./Outro/Outro";
import Researches from "./Researches/Researches";
import Respondent from "./Respondent/Respondent";
import Scientist from "./Scientist/Scientist";

const Index = (props) => {
  return (
    <main className="content">
      <Intro></Intro>
      <Introduce></Introduce>
      <Respondent></Respondent>
      <Researches researches={props.state.researches}></Researches>
      <Scientist></Scientist>
      <Outro></Outro>
    </main>
  );
};

export default Index;
