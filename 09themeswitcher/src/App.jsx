import { useDebugValue, useState, useEffect } from 'react'
import './App.css'
import useTheme, { ThemeProvider } from './context/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {

  const [themeMode, setThemeMode] = useState('light')

  const lightTheme = () => {
    setThemeMode('light')

  }
  const darkTheme = () => {
    setThemeMode('dark')
  }

  useEffect(() => {

    //we will remove light and dark mode 
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(themeMode)//if light means light mode and dark means dark mode
    //will add a class name as light or dark

  }, [themeMode])//any change in thememode will trigger the useEffect


  return (
    <ThemeProvider  value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">

        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* //theme comp */}
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
            {/* card component */}
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider >

  )
}

export default App
