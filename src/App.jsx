import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./pages/Home.jsx";
import Explore from "./pages/Explore.jsx";
import Journal from "./pages/Journal.jsx";
import MiniGame from "./pages/MiniGame.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/explore"
          element={<Explore />}
        />

        <Route
          path="/journal"
          element={<Journal />}
        />

        <Route
          path="/minigame"
          element={<MiniGame/>}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;