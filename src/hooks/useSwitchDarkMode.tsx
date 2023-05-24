import { useState, useEffect } from "react";
const useSwitchDarkMode = (): [boolean, () => void] => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      if (darkMode) {
        body.classList.add("dark");
      } else {
        body.classList.remove("dark");
      }
    }
  }, [darkMode]);
  console.log("switch", darkMode);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return [darkMode, toggleDarkMode];
};
export default useSwitchDarkMode;
