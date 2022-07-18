//import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter , Routes , Route } from "react-router-dom";

//import Login from "./Login";
import ViewPackages from "./ViewPackages";
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

              <Route exact path="/ViewPackages" element={ <ViewPackages/> } />

          </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
