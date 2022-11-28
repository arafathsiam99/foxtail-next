import React from "react";
import { useTheme } from "next-themes";
import { TiLightbulb } from "react-icons/ti";
const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  console.log(theme);
  return (
    <div>
      <TiLightbulb className="md:w-8 md:h-8 ml-1"
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      />
      {theme === TiLightbulb ? "light" : TiLightbulb}
    </div>
  );
};

export default ThemeButton;
