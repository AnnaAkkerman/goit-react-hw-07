import css from "./SearchBox.module.css";
import { selectNameFilter, changeFilter } from "../../redux/filtersSlice";
import { useSelector, useDispatch } from "react-redux";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectNameFilter);

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        className={css.searchBoxInput}
        type="text"
        value={filters}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
