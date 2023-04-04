import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [location, setLocation] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/location").then((res) => {
      setLocation(res.data.results);
    });
  }),
    [];

  return (
    <AppContext.Provider value={{ location, setLocation }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
