import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'



import { BrowserRouter , Routes , Route } from "react-router-dom";

import Login from "./Login";

import Vieweventdetailsforadmin from "./Vieweventdetailsforadmin";

import Sample from "./Sample";

function App() {
  return (
    <div /*className="App"*/>
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}

      <BrowserRouter>

          <Routes>

              <Route exact path="/Login" element={ <Login/> } />
              <Route exact path="/Vieweventdetailsforadmin" element={ <Vieweventdetailsforadmin/> } />
              <Route exact path="/Sample" element={ <Sample/> } />

          </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
