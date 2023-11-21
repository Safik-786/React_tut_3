import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
// import Navbar from './Components/Navbar';
import FormikForm from './Components/FormikForm';
import FormikComponent from './Components/FormikComponent';
import BootStrapReact from './Components/BootStrapReact';
import DismisableAlert from './Components/BootStrapDismisableAlert';
import SubNav from './Components/SubNav';
import BootStrapGrid from './Components/BootStrapGrid';
import BootStrapCard from './Components/BootStrapCard';
import BootStrapNavBar from './Components/BootStrapNavBar';
import NavBar0 from './Components/NavBar0';

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <NavBar0/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/formik' element={<FormikForm />} />
        <Route path='/formikcomp' element={<FormikComponent />} />
        <Route path='/bootstrap' element={<SubNav />}>
          <Route path='home' element={<BootStrapReact />} />
          <Route path='alert' element={<DismisableAlert />} />
          <Route path='grid' element={<BootStrapGrid />} />
          <Route path='card' element={<BootStrapCard />} />
          <Route path='navbar' element={<BootStrapNavBar />} />
        </Route>


      </Routes>
    </div>
  );
}

export default App;
