import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import GreenLightRedLight from "./components/GreenLightRedLight";

import Register from "./components/Register";

function App() {
  const [user, setUser] = useState({});
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        padding: "20px",
      }}
      className="App"
    >
      <Routes>
        <Route exact path="/" element={<Register setUser={setUser} />} />
        <Route
          exact
          path="/game"
          element={<GreenLightRedLight user={user} />}
        />
      </Routes>
    </div>
  );
}

export default App;
