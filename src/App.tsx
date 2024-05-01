import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Departamentos from "./Pages/Departamentos";

const App = () => {
  return (
    <>
      <h1>Dasboard</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/departamentos" element={<Departamentos />} />
      </Routes>
    </>
  );
};

export default App;
