import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [menu, setMenu] = useState(false);

  const toggle = () => {
    setMenu(!menu);
  };
  return (
    <div>
      <AuthContext.Provider value={{ menu, setMenu, toggle }}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
