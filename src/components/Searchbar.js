import { useContext } from "react";
import { FilterContext } from "./contexts/FilterContext";

function SearchBar() {
  const { filter, updateFilter } = useContext(FilterContext);

  const handleChange = (event) => {
    updateFilter({ name: event.target.value }); // Update only the name property
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
        value={filter.name} // Access the name property from filter object
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
