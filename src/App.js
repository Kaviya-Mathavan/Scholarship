import Register from './Register';
import './App.css';
import PersonalDetails from './PersonalDetails';
import Table from './Table';
import RoleSelection from './RoleSelection';
import AdminRegister from './AdminRegister';
import SignIn from './SignIn';
// import ApplicationProcess from './ApplicationProcess';
import Chart from './Chart';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ImageUpload from './ImageUpload';
import AcademicDetails from './AcademicDetails';
import Home from './Home';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import RatingReview from './RatingReview';
import Users from './Users';
import Navlan from './Navlan'
import TableUser from './TableUser';
function App() {



  return (

    <div className="App">
       {/* <Navbar/>
      <LandingPage /> */}
{/* <Navlan/> */}
<BrowserRouter>
      <Routes>
      <Route path="/" element={<Navlan />}/>
        <Route path="/SignIn" element={<SignIn />}/>
         <Route path="/RoleSelection" element={<RoleSelection />} /> 
          <Route path="/Register" element={<Register />} />
          <Route path="/AdminRegister" element={<AdminRegister />} />
          <Route path="/PersonalDetails" element={<PersonalDetails />} /> 
          <Route path="/AcademicDetails" element={<AcademicDetails />} />
          <Route path="/ImageUpload" element={<ImageUpload />} />
          <Route path="/Table" element={<Table />} />

          <Route path="/Chart" element={<Chart />} />
          <Route path="/RatingReview" element={<RatingReview/>}/>
         
             <Route path="/LandingPage" element={<LandingPage/>}/>
              <Route path="/Navbar" element={<Navbar/>}/>
          </Routes>
        </BrowserRouter> 
        {/* <Users/> */}
        {/* <Home/> */}
       
      {/*<ApplicationProcess/> */}

      {/* <ImageUpload/> */}
      {/* <Table/> */}


      {/* <Register/> */}
   
         {/* <PersonalDetails /> */}

      {/* <Application/>

        <AcademicDetails/>

        {/* <RoleSelection/> */}
      {/* <Chart /> */}
      {/* <RatingReview/> */}

    </div>

  );

}



export default App;


