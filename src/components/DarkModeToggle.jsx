import { useEffect, useState } from "react";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    console.log("Dark mode is:", darkMode); // 👈 add this

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="rounded-lg text-gray-400 border border-gray-600 transition"
    >
      {darkMode ? <DarkModeOutlinedIcon></DarkModeOutlinedIcon>:<LightModeOutlinedIcon></LightModeOutlinedIcon>}
    </button>
  );
};

export default DarkModeToggle;
