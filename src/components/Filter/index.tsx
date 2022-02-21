import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { useDispatch, useSelector } from "react-redux";
import { setFilter, setInputType } from "store/actions";
import "./filter.scss";

interface IFilterProps {
  count: number;
}

const Filter: React.FC<IFilterProps> = (props) => {
  const { count } = props;
  const dispatch = useDispatch();

  const type = useSelector((state: any) => state.inputReducer.type);

  const onClickHandler = (e: any) => {
    e.preventDefault();
    let activeFilter = e.currentTarget.textContent;

    dispatch(setFilter(activeFilter.toLowerCase()));

    let filterButtons = e.target.parentElement.children;

    Array.from(filterButtons).forEach((button: any) => {
      if (button.id === activeFilter.toLowerCase()) {
        button.classList.add("active");
      } else {
        button.classList.contains("active") &&
          button.classList.remove("active");
      }
    });
  };

  const changeInputType = (e: any) => {
    if (type === "add") {
      dispatch(setInputType("search"));
    } else {
      dispatch(setInputType("add"));
    }
  };

  return (
    <div className="filter">
      <div className="filter__icon-wrapper">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          onClick={(e) => {
            changeInputType(e);
          }}
          className="filter__icon"
        />
        <span className="filter__icon-count">| {count} items left</span>
      </div>

      <div className="filter__selector-wrapper">
        <span
          className="filter__selector active"
          onClick={(e) => onClickHandler(e)}
          id="all"
        >
          All
        </span>
        <span
          className="filter__selector"
          onClick={(e) => onClickHandler(e)}
          id="active"
        >
          Active
        </span>
        <span
          className="filter__selector"
          onClick={(e) => onClickHandler(e)}
          id="completed"
        >
          Completed
        </span>
        <span
          className="filter__selector"
          onClick={(e) => onClickHandler(e)}
          id="deleted"
        >
          Deleted
        </span>
      </div>
    </div>
  );
};

export default Filter;
