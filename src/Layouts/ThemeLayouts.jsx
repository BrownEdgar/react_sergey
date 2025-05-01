import React, { useEffect, useState } from "react";
import { AlertContext } from '../components/contexts/Contexts';


//  props.children =  <App />
function ThemeLayouts(props) {
  const [theme, setTheme] = useState('light');
  const [isOpen, setIsOpen] = useState(false);

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    document.body.setAttribute('theme', theme)
  }, [theme]);


  return (
    <div>
      <button onClick={changeTheme}> change Theme</button>
      <AlertContext value={{ isOpen, setIsOpen }}>
        {props.children}
      </AlertContext>
    </div>
  );
}

export default ThemeLayouts;
