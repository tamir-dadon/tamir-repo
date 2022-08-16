import "./App.css";
import logo from "./logo.svg";
import Text from "./features/Text/Text";
import Joke from "./features/Joke/Joke";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Login from "./features/Login/Login";
import Home from "./features/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Home" element={<Home />}>
            <Route path=":Joke" element={<Joke />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
