// Setup data layer
// We need this to track the basket components
import React, { createContext, useContext, useReducer } from 'react';

// The daya layer
export const StateContext = createContext();

// Build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)