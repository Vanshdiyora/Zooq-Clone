import { createContext, useContext, useState } from 'react';

const RouterContext = createContext();

export const RouterProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);
  const [name,setName]=useState()
  return (
    <RouterContext.Provider value={{name,setName,logged, setLogged }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouterContext = () => useContext(RouterContext);
