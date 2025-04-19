import React, { useEffect, useState } from "react";



//  props.children =  <App />
function ThemeLayouts(props) {
  const [theme, setTheme] = useState('light');
  console.log(props.children);
  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    document.body.setAttribute('theme', theme)
  }, [theme]);


  return (
    <div>
      <button onClick={changeTheme}> change Theme</button>
      {props.children}
    </div>
  );
}

export default ThemeLayouts;
