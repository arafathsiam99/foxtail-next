import React from "react";
import { useTheme } from "next-themes";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  console.log(theme);
  return (
    <div>
      <button
        className="text-xl bg-red-400 px-3 ml-2 py-2 rounded-lg"
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        
        {theme === "dark" ? "light" : "dark"}
      </button>
    </div>
  );
};

export default ThemeButton;
