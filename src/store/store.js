import React, { createContext, useReducer } from "react";

const initialState = {
  filters: [],
};

const store = createContext(initialState);

const { Provider } = store;

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    const { type, payload } = action;
    switch (type) {
      case "ADD_FILTER":
        return {
          filters: [...state.filters, payload],
        };
      case "REMOVE_FILTER":
        const updatedFilters = state.filters.filter(
          (filter) => filter !== payload
        );
        return {
          filters: updatedFilters,
        };
      case "CLEAR_FILTERS":
        return {
          filters: [],
        };
      default:
        return state;
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, AppProvider };
