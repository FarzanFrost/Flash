//import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter , Routes , Route } from "react-router-dom";
import SignContextProviderInterface from "./SignContextProviderInterface";
import LoginContextProviderInterface from './LoginContextProviderInterface'
import OldHeader from "./oldHeader";
import Header from "./Header";
import ContactUs from "./ContactUs";
import OldFooter from "./oldFooter";
import Footer from "./Footer";
import ViewEventsForCustomer from "./ViewEventsForCustomer";
import Vieweventdetailsforadmin from "./Vieweventdetailsforadmin";
import Sample from "./Sample";
import AddEmployee from "./AddEmployee";
import LandingPage from "./LandingPage";
import ResetPasswordContextProviderInterface from "./ResetPasswordContextProviderInterface";
import EditEmployee from "./EditEmployee";
import EventReviewsCustomerContextProviderInterface from "./EventReviewsCustomerContextProviderInterface";

import ViewPhotos from "./ViewPhotos";
import UploadEditedPhotos from "./UploadEditedPhotos";
import EventSelection  from "./EventSelection";
import MoreDetailsOfEventsForAdmin from "./MoreDetailsOfEventsForAdmin";
import NewPackage from "./NewPackage";
import AdminViewEmployeeDetailspage from "./AdminViewEmployeeDetailspage";
import CustomerProfile from "./CustomerProfile";
import EditPackage from "./EditPackage";
import AdminViewAllReviews from "./AdminViewAllReviews";
import ManagerViewEventFullDetails from "./MangerViewEventFullDetails";
import ManagerViewEmployeeDetails from "./ManagerViewEmployeeDetails";
import ManagerViewAllReviews from "./ManagerViewAllReviews";
import NewEventBooking from "./NewEventBooking";
import CardDetail from "./CardDetail";
import ChangeBooking from "./ChangeBooking";
import Customer from './UIStructure/Customer'
import Admin from './UIStructure/Admin'
import ViewPackagesPurperty from "./ViewPackagesPurperty";
import CustomerNav from "./CustomerNav";
import EmployeeNav from "./EmployeeNav";
import CustomerAuthenticationContextProviderInterface from "./UIStructure/CustomerAuthenticationContextProviderInterface";
import Calender from "./Calender";
import AdminDashboard from "./AdminDashboard";
import Employee from "./UIStructure/Employee";
import Manager from "./UIStructure/Manager";
import SelectImageContextProviderInterface from "./SelectImageContextProviderInterface";
import ViewFiles from "./ViewFiles";
import FolderStructuresCustomers from "./FolderStructuresCustomers";
import ManagerDashboard from "./ManagerDashboard";
import CustomerChat from "./CustomerChat";
import EmployeeWorkView from "./EmployeeWorkView";
import AdminViewEventFullDetails from "./AdminViewEventFullDetails";
// azure
import azureDemo from "./AzureDemo";
import AzureDemo from "./AzureDemo";
import ManagerAuthenticationContextProviderInterface from "./UIStructure/ManagerAuthenticationContextProviderInterface";


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
              <Route exact path="/Sample" element={ <Sample/> } />
              <Route exact path="/AddEmployee" element={ <AddEmployee/> } />
              <Route exact path="/AdminViewEmployeeDetailspage" element={ <AdminViewEmployeeDetailspage/> } />
              <Route exact path="/OldHeader" element={ <OldHeader/> } />
              <Route exact path="/Header" element={ <Header/> } />
              <Route exact path="/" element={ <LandingPage/> } />
              <Route exact path="/ContactUs" element={ <ContactUs/> } />
              <Route exact path="/Footer" element={ <Footer/> } />
              <Route exact path="/OldFooter" element={ <OldFooter/> } />
              <Route exact path="/ViewEventsForCustomer" element={ <ViewEventsForCustomer/> } />
              <Route exact path="/MoreDetailsOfEventsForAdmin" element={ <MoreDetailsOfEventsForAdmin/> } />
              <Route exact path="/ResetPassword" element={ <ResetPasswordContextProviderInterface/> } />
              <Route exact path="/EditEmployee" element={ <EditEmployee/> } />
              <Route exact path="/Customer" element={ <CustomerAuthenticationContextProviderInterface/> } />
              {/*<Route exact path="/Customer" element={ <Customer/> } />*/}
              <Route exact path="/Employee" element={ <Employee/> } />
              <Route exact path="/Manager" element={ <ManagerAuthenticationContextProviderInterface/> } />
              <Route exact path="/Admin" element={ <Admin/> } />
              <Route exact path="/EventReviews" element={ <EventReviewsCustomerContextProviderInterface/> } />
              <Route exact path="/ViewPhotos" element={ <ViewPhotos/> } />
              <Route exact path="/UploadEditedPhotos" element={ <UploadEditedPhotos/> } />
              <Route exact path="/EventSelection" element={ <EventSelection/> } />
              <Route exact path="/NewPackage" element={ <NewPackage/> } />
              <Route exact path="/CustomerProfile" element={ <CustomerProfile/> } />
              <Route exact path="/EditPackage" element={ <EditPackage/> } />
              <Route exact path="/AdminViewAllReviews" element={ <AdminViewAllReviews/> } />
              <Route exact path="/ManagerViewEventFullDetails" element={ <ManagerViewEventFullDetails/> } />
              <Route exact path="/AdminViewEventFullDetails" element={ <AdminViewEventFullDetails/> } />
              <Route exact path="/ManagerViewEmployeeDetails" element={ <ManagerViewEmployeeDetails/> } />
              <Route exact path="/ManagerViewEventFullDetails" element={ <ManagerViewAllReviews/> } />
              <Route exact path="/NewEventBooking" element={ <NewEventBooking/> } />
              <Route exact path="/CardDetail" element={ <CardDetail/> } />
              <Route exact path="/ChangeBooking" element={ <ChangeBooking/> } />
              <Route exact path="/ViewPackages" element={ <ViewPackagesPurperty/> } />
              <Route exact path="/CustomerNav" element={ <CustomerNav/> } />
              <Route exact path="/EmployeeNav" element={ <EmployeeNav/> } />
              <Route exact path="/Calender" element={ <Calender/> } />
              <Route exact path="/AdminDashboard" element={ <AdminDashboard/> } />
              <Route exact path="/ManagerDashboard" element={ <ManagerDashboard/> } />
              <Route exact path="/ViewFiles" element={ <ViewFiles/> } />
              <Route exact path="/Folder" element={ <SelectImageContextProviderInterface/> } />
              <Route exact path="/CustomerChat" element={ <CustomerChat/> } />
              <Route exact path="/WorkView" element={ <EmployeeWorkView/> } />
              {/*azure sample*/}
              <Route exact path="/AzureDemo" element={<AzureDemo/>}/>
          </Routes>


      </BrowserRouter>

    </div>
  );
}

export default App;
