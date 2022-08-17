//import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter , Routes , Route } from "react-router-dom";
import SignContextProviderInterface from "./SignContextProviderInterface";
import LoginContextProviderInterface from './LoginContextProviderInterface'
import Header from "./Header";
import SideNavAdmin from "./SideNavAdmin";
import SideNavCustomer from "./SideNavCustomer";
import SideNavEmployee from "./SideNavEmployee";
import SideNavManager from "./SideNavManager";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import ViewEventsForCustomer from "./ViewEventsForCustomer";
import Vieweventdetailsforadmin from "./Vieweventdetailsforadmin";
import Sample from "./Sample";
import AddEmployee from "./AddEmployee";
import ViewPackages from "./ViewPackages";
import LandingPage from "./LandingPage";
import ResetPasswordContextProviderInterface from "./ResetPasswordContextProviderInterface";
import EditEmployee from "./EditEmployee";
import MoreDetailsOfEventsForAdmin from "./MoreDetailsOfEventsForAdmin";
import NewPackage from "./NewPackage";
import AdminViewEmployeeDetailspage from "./AdminViewEmployeeDetailspage";
import EventReviewsCustomerContextProviderInterface from "./EventReviewsCustomerContextProviderInterface";
import CustomerProfile from "./CustomerProfile";
import EditPackage from "./EditPackage";
import AdminViewAllReviews from "./AdminViewAllReviews";
import ManagerViewEventFullDetails from "./MangerViewEventFullDetails";
import ManagerViewEmployeeDetails from "./ManagerViewEmployeeDetails";
import ManagerViewAllReviews from "./ManagerViewAllReviews";
import NewEventBooking from "./NewEventBooking";
import CardDetail from "./CardDetail";
import ChangeBooking from "./ChangeBooking";
import GalleryStructure from './GalleryStructure'

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
              <Route exact path="/AdminViewEmployeeDetailspage" element={ <AdminViewEmployeeDetailspage/> } />
              <Route exact path="/Header" element={ <Header/> } />
              <Route exact path="/LandingPage" element={ <LandingPage/> } />
              <Route exact path="/SideNavAdmin" element={ <SideNavAdmin/> } />
              <Route exact path="/SideNavCustomer" element={ <SideNavCustomer/> } />
              <Route exact path="/SideNavEmployee" element={ <SideNavEmployee/> } />
              <Route exact path="/SideNavManager" element={ <SideNavManager/> } />
              <Route exact path="/ContactUs" element={ <ContactUs/> } />
              <Route exact path="/Footer" element={ <Footer/> } />
              <Route exact path="/ViewEventsForCustomer" element={ <ViewEventsForCustomer/> } />
              <Route exact path="/MoreDetailsOfEventsForAdmin" element={ <MoreDetailsOfEventsForAdmin/> } />
              <Route exact path={"/ResetPassword"} element={ <ResetPasswordContextProviderInterface/> } />
              <Route exact path="/EditEmployee" element={ <EditEmployee/> } />
              <Route exact path="/NewPackage" element={ <NewPackage/> } />
              <Route exact path="/GalleryStructure" element={ <GalleryStructure/> } />
              <Route exact path="/EventReviews" element={ <EventReviewsCustomerContextProviderInterface/> } />
              <Route exact path="/CustomerProfile" element={ <CustomerProfile/> } />
              <Route exact path="/EditPackage" element={ <EditPackage/> } />
              <Route exact path="/AdminViewAllReviews" element={ <AdminViewAllReviews/> } />
              <Route exact path="/ManagerViewEventFullDetails" element={ <ManagerViewEventFullDetails/> } />
              <Route exact path="/ManagerViewEmployeeDetails" element={ <ManagerViewEmployeeDetails/> } />
              <Route exact path="/ManagerViewAllReviews" element={ <ManagerViewAllReviews/> } />
              <Route exact path="/NewEventBooking" element={ <NewEventBooking/> } />
              <Route exact path="/CardDetail" element={ <CardDetail/> } />
              <Route exact path="/ChangeBooking" element={ <ChangeBooking/> } />

          </Routes>


      </BrowserRouter>

    </div>
  );
}

export default App;
