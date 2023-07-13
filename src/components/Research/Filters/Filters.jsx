import Filter from "./Filter/Filter";
import "./Filters.scss";

const Filters = (props) => {
  let filtersContent = props.filters.map((filter) => {
    return <Filter text={filter.text} />;
  });
  return (
    <section className="filters">
      <div className="container">
        <div className="filters__row">{filtersContent}</div>
      </div>
    </section>
  );
};

export default Filters;
