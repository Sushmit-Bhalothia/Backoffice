import React, { createContext, useState } from "react";

// Create the context
export const FilterContext = createContext();

// Create a provider component
export const FilterProvider = ({ children }) => {
  const [filter, setFilter] = useState(""); // Default language is 'en' (English)

  // Function to update the language
  const updateFilter = (newFilter) => {
    setFilter(newFilter);
  };

  // Provide the language state and update function to the children components
  return (
    <FilterContext.Provider value={{ filter, updateFilter }}>
      {children}
    </FilterContext.Provider>
  );
};
