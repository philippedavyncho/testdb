import { useState, createContext } from "react";

export const CategoryContext = createContext();


const Provider = ({children})=>{
    
    const [selectedCategory, setSelectedCategory] = useState(null);
    
    
    return (
        <CategoryContext.Provider value={{selectedCategory, setSelectedCategory}}>
            {children}
        </CategoryContext.Provider>
    )
}

export default Provider