import "./Introduce.scss";

const Introduce = (props) => {
  return (
    <section className="introduce">
      <div className="container">
        <div className="introduce__row">
          <div className="introduce__top">
            <h2 className="introduce__title">
              <b>ResSearch – </b>это платформа для простого и быстрого поиска и
              взаимодействия участников и исследователей.
            </h2>
          </div>
          <div className="introduce__bottom">
            <h2 className="introduce__title">
              <b>У нас уже:</b>
            </h2>
            <div className="introduce__items">
              <div className="introduce__item">
                <h3>50+</h3>
                <p>исследователей, довольных результатом</p>
              </div>
              <div className="introduce__item">
                <h3>100+</h3>
                <p>успешно проведенных исследований</p>
              </div>
              <div className="introduce__item">
                <h3>500+</h3>
                <p>респондентов, поучаствовавших в исследованиях</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduce;
