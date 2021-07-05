import React, { useState } from "react";
import Header from "./Header";
import Profile from "./Profile";

import { UserProvider } from "../context/user";
import { ThemeProvider } from "../context/theme";

function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <main className={theme}>
      <ThemeProvider>
        <UserProvider>
          <Header />
          <Profile />
        </UserProvider>
      </ThemeProvider>
    </main>
  );
}

export default App;
