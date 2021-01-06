//Setting up data layer
//Using context API to track basket interactions
import React, { createContext, useContext, useReducer } from 'react';


//Data layer 
export const StateContext = createContext();

//Provider - wrap the app in the provider
export const StateProvider = ({ reducer, initalState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initalState)}>
        {children}
    </StateContext.Provider>


)
