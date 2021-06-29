import React, { useReducer, useContext } from "react";
import { data } from "./data";

const initialState = { furnitures: [], displayArea: [], rawdata: data };

function reducer(state, action) {
  // console.log(state.displayArea);
  // console.log("object", action.data);
  switch (action.type) {
    case "UPDATE_FURNITURE_STATE":
      return { ...state, furnitures: [...state.furnitures, action.data] };
    case "ADD_TO_DISPLAY_AREA":
      const newItem = state.rawdata.filter(
        (product) => product.id === action.data
      );

      console.log(newItem);
      return { ...state, displayArea: [...state.displayArea, ...newItem] };
    default:
      return state;
  }
}
export const StateContext = React.createContext();
export const StateProvider = ({ children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const GetAppState = () => useContext(StateContext);
