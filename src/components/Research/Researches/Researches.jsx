import Research from "./Research/Research";
import "./Researches.scss";

const Researches = (props) => {
  let researchesContent = props.researches.map((research) => {
    return (
      <Research
        id={research.id}
        owner={research.owner}
        title={research.title}
        image={research.image}
        date={research.date}
        duration={research.duration}
        requirements={research.requirements}
        text={research.text}
        count={research.countOfRespondents}
        maxCount={research.maxCountOfRespondents}
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
