import React, { useState } from "react";
import Light from "../../assets/website/darkmode.jpg";
import Dark from "../../assets/website/light.jpg";
import { useEffect } from "react";

function DarkMode() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element=document.documentElement;
  console.log(element)

  useEffect(()=>{
    localStorage.setItem("theme", theme)
    if(theme=== "dark"){
        element.classList.add("dark")
        element.classList.add("dark")
    }else{
        element.classList.remove("light")
        element.classList.remove("dark")
    }
  })

  return (
    <div className="relative">
      <img
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        src={Light}
        alt="lightButton"
        className={`w-12 cursor-pointer absolute right-0 z-10
             ${
               theme === "dark" ? "opacity-0" : "opacity-100"
             } transition-all duration-300`}
      />
      <img
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        src={Light}
        alt="darkButton"
        className={`w-12 cursor-pointer`}
      />
    </div>
  );
}

export default DarkMode;
