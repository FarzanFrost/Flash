//import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter , Routes , Route } from "react-router-dom";

import Header from "./Header";
import Login from "./Login";
import AddEmployee from "./AddEmployee";
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
        <AddEmployee />

      <BrowserRouter>

          <Routes>


              <Route exact path="/Header" element={ <Header/> } />

          </Routes>

          <Routes>

              <Route exact path="/Login" element={ <Login/> } />
              <Route exact path="/AddEmployee" element={ <AddEmployee/> } />
              <Route exact path="/ViewPackages" element={ <ViewPackages/> } />


          </Routes>


      </BrowserRouter>

    </div>
  );
}

export default App;
