import { useEffect, useLayoutEffect, useState } from "react";
import Research from "./Research/Research";
import "./Researches.scss";
import axios from "axios";

const Researches = (props) => {
  let [researches, setResearches] = useState([])

  async function fetchResearches() {
    await axios.get('http://localhost:5130/Api/Study',{
      'headers': {
        'Accept': "*/*",
        'Content-Type': 'application/json;charset=UTF-8',
      }},
      
      ).then(response => {
        console.log(response.data)
        setResearches(response.data)
      })
  }
  useLayoutEffect(() => {
    fetchResearches()
  }, [])
  console.log(researches)
  let researchesContent = researches.map((research) => {
    return (
      <Research
        id={research.id}
        researcherId={research.researcherId}
        title={research.title}
        createdAt={research.createdAt}
        studyArea={research.studyArea}
        duration={research.duration}
        description={research.description}
        planedParticipantNumber={research.planedParticipantNumber}
        actualParticipantNumber={research.actualParticipantNumber}
      />
    );
  });
  return (
    <section className="researches">
      <div className="container">
        <div className="researches__items">{researchesContent}</div>
      </div>
    </section>
  );
};

export default Researches;
