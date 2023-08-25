import { useContext } from "react";
import { FilterContext } from "../contexts/FilterContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

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

        marginLeft: "-10vw",

        // width: "30vw",
      }}
    >
      {/* <FontAwesomeIcon icon={faSearch}/> */}
      <input
        className="searchbar"
        type="text"
        placeholder="&#xf002; Search by name or ID"
        value={filter.name} // Access the name property from filter object
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
