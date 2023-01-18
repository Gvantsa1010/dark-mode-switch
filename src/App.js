
import './App.css';
import useDetectDevice from './hooks/useDetectDevice';
import { useState, useEffect } from "react";
import './darkMode.css';



function App () {

  const deviceType = useDetectDevice();
  

  const [theme, setTheme] = useState( localStorage.getItem('theme') || 'light');

  const toggleTheme = () => {
      if(theme === 'light' & deviceType === 'desktop'){
        setTheme('dark');
      }else{
        setTheme('light')
      }
    }

  useEffect (() => {
    localStorage.setItem('theme', theme);
      document.body.className = theme;
  }, [theme]);
  

    return (
      <div className={`App ${theme}`}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <br/>
    </div>
    )
  }


export default App;
