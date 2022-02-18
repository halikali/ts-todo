import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { setSearchText } from "../../store/actions";

import "./search.scss";

const Search = () => {
  const dispatch = useDispatch();
  const refInputSearch = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: any, text: string) => {
    e.preventDefault();
    dispatch(setSearchText(text));
  };

  return (
    <form
      className="search"
      onSubmit={(e) => handleSubmit(e, refInputSearch.current!.value)}
    >
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search somethings ..."
        ref={refInputSearch}
      />
    </form>
  );
};

export default Search;
