import { createContext, useState } from 'react';

export const InputContext = createContext()

const InputContextProvider = ({children}) => {

    const [scrollToFocus, setScrollToFocus] = useState(false)


    return(
        <InputContext.Provider value={{scrollToFocus,setScrollToFocus}}>
            {children}
        </InputContext.Provider>
    )
}

export default InputContextProvider