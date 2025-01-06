import {useEffect ,useState, useContext, createContext } from "react";
import react from 'react'

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "white");

    const changeTheme = () => {
        if (theme == "dark") {
            setTheme("white")
        }
        else {
            setTheme("dark")
        }
    }

    const fade = {
        "hidden": { opacity: 0 },
        "visible": { opacity: 1 }
    }

    const value = {
        theme,
        changeTheme,
        fade
    }
    useEffect(() => {
        localStorage.setItem("theme", theme)
        // const localTheme = localStorage.getItem("theme")
        // document.querySelector('html').setAttribute("data-theme", localTheme)
    }, [theme])
    return <ThemeContext.Provider value={value}>
        {children}
    </ThemeContext.Provider>
}

const themeHook = () => {
    const context = useContext(ThemeContext)
    return context
}

export default themeHook