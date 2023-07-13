import "./Respondent.scss";

const Respondent = (props) => {
  return (
    <section className="respondent bg">
      <div className="container">
        <h2 className="respondent__title">
          Для чего мне становиться участником?
        </h2>
        <div className="respondent__row">
          <div className="respondent__text">
            <p>Ты сможешь:</p>
            <ul>
              <li>Участвовать в интересных исследованиях </li>
              <li>Двигать науку вперёд </li>
              <li>Иметь дополнительный источник дохода</li>
            </ul>
          </div>
          <a href="#" className="respondent__link link-bg">
            Стать участником
          </a>
        </div>
      </div>
    </section>
  );
};

export default Respondent;
