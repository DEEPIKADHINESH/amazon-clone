import React, {createContext,useContext,useReducer}from "react";
//used toprepare datalayer
export const StateContext=createContext();
//wrap our wholeapp and provide it to data layer
export const StateProvider=({reducer,initialState,children})=>{
    return(
   < StateContext.Provider value= {useReducer(reducer, initialState)}>
       {children}
       </StateContext.Provider>
    )
}
//pull the infromation from data layer
export const useStateValue=()=>useContext(StateContext)
