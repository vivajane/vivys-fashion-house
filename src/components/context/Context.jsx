
import {createContext}from 'react';
import allProducts from '../../Assets/allProducts';

export const ContextProvider = createContext(null)

const Context = (props) => {
    const contextValue = {allProducts}
  return (
    <ContextProvider.Provider value = {contextValue}>
        {props.children}
    </ContextProvider.Provider>
  )
}

export default Context
