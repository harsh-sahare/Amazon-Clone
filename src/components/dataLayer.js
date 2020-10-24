import React, { createContext, useReducer, useContext } from "react";

export const Context = createContext();

export default function DataLayer({ initial_state, reducer, children }) {
  return (
    <>
      <Context.Provider value={useReducer(reducer, initial_state)}>
        {children}
      </Context.Provider>
    </>
  );
}
export const UseContextValue = () => useContext(Context);
