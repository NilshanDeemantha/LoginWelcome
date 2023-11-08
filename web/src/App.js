import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
