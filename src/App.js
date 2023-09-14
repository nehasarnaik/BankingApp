import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Register from './Components/Register';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import Store from './Redux/Store';

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
      </Routes>
      </BrowserRouter>
      <ToastContainer toastStyle={{ color: "crimson" }} />
    </div>
    </Provider>
  );
}

export default App;
