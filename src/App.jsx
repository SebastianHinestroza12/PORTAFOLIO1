import { useEffect } from "react";
import { Home } from "./components/Home";

function App() {
  useEffect(() => {
    const language = localStorage.getItem('selectedLanguage');

    if (!language) {
      localStorage.setItem('selectedLanguage', 'en')
    }
  }, [])

  return (
    <Home />
  )
}

export default App
