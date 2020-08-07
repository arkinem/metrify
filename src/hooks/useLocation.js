import React, { createContext, useContext, useState } from "react";

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState(null);

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

const useLocation = () => {
  const context = useContext(LocationContext);
  return { ...context };
};

export default useLocation;
