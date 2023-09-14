
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Register from "./Components/Register";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import Store from "./Redux/Store";
import Dashboard from "./Components/Dashboard";
import BankingService from './Components/BankingService';
import BankingPage from './Components/BankingPage';
import InvestmentPage from './Components/InvestmentPage';
import Loans from './Components/Loans';
import Fintech from './Components/Fintech';
import Insurance from './Components/Insurance';
import Exchange from './Components/Exchange';


function App() {
  return (
    <Provider store={Store}>

    <div className="App">
      <BrowserRouter>
        <div className='header background_colour'>
          <h1 className='text_padding'>BANKING APP</h1>
        </div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/bankingService' element={<BankingService></BankingService>}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/dashboard/banking" element={<BankingPage />} />
        <Route path="/dashboard/investments" element={<InvestmentPage />} />
        <Route path="/dashboard/loans" element={<Loans />} />
        <Route path="/dashboard/fintech" element={<Fintech />} />
        <Route path="/dashboard/insurance" element={<Insurance />} />
        <Route path="/dashboard/exchanges" element={<Exchange />} />
      </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </div>
    </Provider>
  );
}

export default App;
