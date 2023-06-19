import React, { createContext, useState } from "react";

// Create the context
export const LanguageContext = createContext();

// Create a provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // Default language is 'en' (English)

  // Function to update the language
  const updateLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  // Provide the language state and update function to the children components
  return (
    <LanguageContext.Provider value={{ language, updateLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
