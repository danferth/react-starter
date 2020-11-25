import React from "react";
import Card from "./components/card";
import DarkSwitch from "./components/darkBtn";
import { useTheme } from "./util/ThemeContext";
const App = () => {
  const dark = useTheme();
  return (
    <div className={dark ? `dark` : ``}>
      <DarkSwitch />
      <Card />
    </div>
  );
};

export default App;
