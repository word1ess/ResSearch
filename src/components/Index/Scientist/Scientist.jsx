import "./Scientist.scss";

const Scientist = (props) => {
  return (
    <section className="scientist bg">
      <div className="container">
        <h2 className="scientist__title">
          Для чего мне становиться участником?
        </h2>
        <div className="scientist__row">
          <div className="scientist__text">
            <p>
              Наш сайт предоставляет большую базу ответственных людей, готовых
              помочь в ваших исследованиях – поделиться своим мнением,
              протестировать продукт или даже привить себе новую привычку.
            </p>
          </div>
          <a href="#" className="scientist__link link-bg">
            Стать исследователем
          </a>
        </div>
      </div>
    </section>
  );
};

export default Scientist;
