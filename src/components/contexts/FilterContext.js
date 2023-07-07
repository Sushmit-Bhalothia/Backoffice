import React, { createContext, useState } from "react";

// Create the context
export const FilterContext = createContext();

// Create a provider component
export const FilterProvider = ({ children }) => {
  const [filter, setFilter] = useState({
    name: "",
    sort: "id",
    date: "",
  }); // Default filter values

  // Function to update the filter
  const updateFilter = (newFilter) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      ...newFilter,
    }));
  };

  // Provide the filter state and update function to the children components
  return (
    <FilterContext.Provider value={{ filter, updateFilter }}>
      {children}
    </FilterContext.Provider>
  );
};
