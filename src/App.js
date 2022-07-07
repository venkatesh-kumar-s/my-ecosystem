import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthRoutes, NonAuthRoutes } from "./routes";
import { AuthContext } from "./contexts/AuthContext";
import { useState } from "react";

function App() {
  const [verified, setVerified] = useState(false);

  return (
    <AuthContext.Provider value={{ verified, setVerified }}>
      <div className="App">
        <Router>
          <Routes>
            {localStorage.getItem("token")
              ? AuthRoutes.map((r, i) => (
                  <Route key={i} path={r.path} element={r.element} />
                ))
              : NonAuthRoutes.map((r, i) => (
                  <Route key={i} path={r.path} element={r.element} />
                ))}
          </Routes>
        </Router>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
