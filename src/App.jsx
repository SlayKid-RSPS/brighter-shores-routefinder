import React, { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Navigation from "./components/Navigation.jsx";
import pages from "./pages";

const App = () => {
  const [mobileMenuShown, setMobileMenuShown] = useState(false);

  return (
    <HashRouter>
      <Header setMobileMenuShown={setMobileMenuShown} />
      <div className="container mx-auto max-w-[1200px] flex px-3">
        <Navigation
          mobileMenuShown={mobileMenuShown}
          setMobileMenuShown={setMobileMenuShown}
        />
        <ThemeProvider>
      <header>
        <h1>My App</h1>
        <button onClick={toggleTheme}>
          {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </header>
      {/* Render pages */}
    </ThemeProvider>
        <Routes>
          {pages.map((page) => (
            <Route
              key={page.path}
              path={page.path}
              element={React.createElement(page.component)}
            />
          ))}
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;
