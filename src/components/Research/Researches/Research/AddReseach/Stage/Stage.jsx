import "./Stage.scss";

const Stage = () => {
    return (
        <div className="stage">
            <div className="stage__top">
                <div className="stage__top__name">
                    <input type="text" placeholder="Название этапа"></input>
                </div>
                <div className="stage__top__date">
                    <input type="date"></input>
                    <img src="image/svgicons/arrow.svg" alt="" />
                    <input type="date"></input>
                </div>
            </div>
            <div className="stage__bottom">
                <textarea placeholder="Описание этапа"></textarea>
                <img src="image/svgicons/basket.svg" alt="" />
            </div>
        </div>
    );
};

export default Stage;