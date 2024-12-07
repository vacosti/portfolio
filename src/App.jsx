import "./App.css";

import Header from "./components/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState("pt-br");

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };
  return (
    <div className="App">
      <Header
        selectedLanguage={language}
        setSelectedLanguage={handleChange}
      ></Header>
      <main>
        <CoreConcepts selectedLanguage={language} />
        <Examples selectedLanguage={language} />
      </main>
    </div>
  );
}

export default App;
