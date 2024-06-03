import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DailyWord from "./pages/DailyWord";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/daily-word/:day" element={<DailyWord />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
