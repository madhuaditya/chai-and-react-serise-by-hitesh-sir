import ThemeBtn from "./components/ThemeBtn.jsx";
import Card from "./components/Card.jsx";
import {ThemeProvider} from "./context/ThemeContext.js";
import {useEffect, useState} from "react";


function App() {

    const [themeMode, setThemeMode] = useState('light');
    const darkTheme = ()=>{
        setThemeMode('dark');
    }

    const lightTheme =()=>{
        setThemeMode('light')
    }
    useEffect(() => {
        document.querySelector('html').classList.remove("light", "dark")
        document.querySelector('html').classList.add(themeMode)
    }, [themeMode])
    return (
      <ThemeProvider value={{darkTheme,themeMode, lightTheme }}>
          <h1 className={'bg-red-400 m-4 p-4 text-3xl text-center'}> hello madhurendra</h1>

          <div className="flex flex-wrap min-h-screen items-center">
              <div className="w-full">
                  <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                      <ThemeBtn></ThemeBtn>
                  </div>

                  <div className="w-full  max-w-sm mx-auto">
                      <Card></Card>
                  </div>
              </div>
          </div>
      </ThemeProvider>
  )
}

export default App
