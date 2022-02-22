import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchText } from "store/actions";

import "./search.scss";

const Search = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const onChangeHandler = (e: any) => {
    e.preventDefault();
    setText(e.target.value);
    e.target.value === ""
      ? dispatch(setSearchText(""))
      : dispatch(setSearchText(text));
  };

  return (
    <form className="search">
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search somethings ..."
        onChange={(e) => {
          onChangeHandler(e);
        }}
        value={text}
        autoComplete="off"
      />
    </form>
  );
};

export default Search;
