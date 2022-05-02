import { useState } from "react";
import ToolBar from "@components/ToolBar";

import "./App.css";

function App() {
  // Le thème est en fait une classe CSS qui englobera notre app
  // Ca change juste le couleur de la typo ...
  const [theme, setTheme] = useState("light");

  return (
    <div className={theme}>
      <ToolBar theme={theme} updateTheme={setTheme} />
      <p>Theme utilisé : {theme}</p>
    </div>
  );
}

export default App;
