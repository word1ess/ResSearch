import "./Intro.scss";

const Intro = (props) => {
  return (
    <section className="intro">
      <div className="container">
        <div className="intro__row">
          <div className="intro__text">
            <p>
              Проводите исследования с гарантированным качеством участников и
              присоединяйтесь к тысячам исследователей
            </p>
            <a href="#" className="link-bg">
              Начать
            </a>
          </div>
        </div>
      </div>
      <img src="image/main/intro/bg.png" alt="bg" />
    </section>
  );
};

export default Intro;
