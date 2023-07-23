import "./Faq.scss";
import QaA from "./QaA/QaA";
const Faq = (props) => {
  let faqContent = props.state.questions.map((block) => {
    return <QaA question={block.question} answer={block.answer}></QaA>;
  });
  return (
    <main className="content bg">
      <div className="container">
        <article className="qaa">
          <div className="qaa__row">{faqContent}</div>
        </article>
      </div>
    </main>
  );
};

export default Faq;
