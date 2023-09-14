import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Register from "./Components/Register";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import Store from "./Redux/Store";
import Dashboard from "./Components/Dashboard";
import Nav from "./Components/Nav";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Nav />
                  <Home></Home>
                </>
              }
            ></Route>
            <Route
              path="/register"
              element={
                <>
                  <Nav />
                  <Register />
                </>
              }
            ></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Routes>
        </BrowserRouter>
        <ToastContainer toastStyle={{ color: "crimson" }} />
      </div>
    </Provider>
  );
}

export default App;
