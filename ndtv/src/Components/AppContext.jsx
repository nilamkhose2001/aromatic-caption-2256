import { createContext,useState } from "react";

export const AppContext=createContext()
export default function AppContextProvider({children}){
        const [news,setNews]=useState({})

        const handleNews=(n)=>
        {
                setNews(n)
        }

        console.log("News",news)
        return <AppContext.Provider value={{handleNews,news}}>
            {children}
        </AppContext.Provider>
}