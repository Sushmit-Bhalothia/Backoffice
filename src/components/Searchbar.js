import { useContext } from "react";
import { FilterContext } from "./contexts/FilterContext";
function SearchBar() {
  const { filter, updateFilter } = useContext(FilterContext);

  const handleChange = (event) => {
    updateFilter(event.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginTop: "-2vh",
        marginLeft: "-10vw",
        // width: "30vw",
      }}
    >
      <input
        className="searchbar"
        type="text"
        placeholder=" 🔍 Search by name or ID"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
