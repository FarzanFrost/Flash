//import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter , Routes , Route } from "react-router-dom";
import SignContextProviderInterface from "./SignContextProviderInterface";
import LoginContextProviderInterface from './LoginContextProviderInterface'


import Header from "./Header";
import Vieweventdetailsforadmin from "./Vieweventdetailsforadmin";
import Sample from "./Sample";
import AddEmployee from "./AddEmployee";
import ViewPackages from "./ViewPackages";
import EditEmployee from "./EditEmployee";
import Adminviewemployeedetailspage from "./Adminviewemployeedetailspage";


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

              <Route exact path="/Login" element={ <LoginContextProviderInterface/> } />
              <Route exact path="/Signup" element={ <SignContextProviderInterface/> } />
              <Route exact path="/Vieweventdetailsforadmin" element={ <Vieweventdetailsforadmin/> } />
              <Route exact path="/Snample" element={ <Sample/> } />
              <Route exact path="/AddEmployee" element={ <AddEmployee/> } />
              <Route exact path="/ViewPackages" element={ <ViewPackages/> } />
              <Route exact path="/Adminviewemployeedetailspage" element={ <Adminviewemployeedetailspage/> } />
              <Route exact path="/Header" element={ <Header/> } />
              <Route exact path="/EditEmployee" element={ <EditEmployee/> } />

          </Routes>


      </BrowserRouter>

    </div>
  );
}

export default App;
