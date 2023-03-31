import { Route, Routes } from 'react-router-dom';
import './App.css';
import Checkout from './components/checkout/Checkout';
import Flights from './components/flights/Flights';
import Home from './components/home/Home';
import Hotels from './components/hotels/Hotels';
import Login from './components/login/Login';
import Navbar from './components/navbar/Navbar';
import NoPageFound from './components/noPageFound/NoPageFound';
import SignUp from './components/signup/SignUp';
import Trains from './components/trains/Trains';

function App() {
  return (
    <div className="app">
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/flights' element={<Flights />} />
          <Route path='/hotels' element={<Hotels />} />
          <Route path='/trains' element={<Trains />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='*' element={<NoPageFound />} />

        </Routes>
      </main>
    </div>
  );
}

export default App;
