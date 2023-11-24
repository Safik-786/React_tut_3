import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import './index.css'
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
import BootStrapCarousel from './Components/BootStrapCarousel';
// import Hook from './Components/Hook';
import SplitButton from './Hook/SplitButton';
import UseState from './Hook/UseState';
import UseReducer from './Hook/UseReducer';
import UseRef from './Hook/UseRef';
import UseRef2 from './Hook/UseRef2';

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <NavBar0 />
      <Routes>
        <Route path='/' element={
          <>
            <BootStrapCarousel />
            <Home />
          </>
        } />
        <Route path='/formik' element={<FormikForm />} />
        <Route path='/formikcomp' element={<FormikComponent />} />
        <Route path='/hook' element={<SplitButton />} >
          <Route path='usestate' element={<UseState />} />
          <Route path='useref' element={
            <>
              <div style={{display:"flex"}}>
                <div style={{ width: "50%" }}>
                <h2>useRef-1</h2>
                  <UseRef />
                </div>
                <div style={{ width: "50%" }}>
                <h2>useRef-2</h2>
                  <UseRef2 />
                </div>
              </div>
            </>
          } />
          <Route path='usereducer' element={<UseReducer />} />
          <Route path='usecontext' element={<UseState />} />
          <Route path='useeffect' element={<UseState />} />
        </Route>
        <Route path='/bootstrap' element={<SubNav />}>
          <Route path='home' element={<BootStrapReact />} />
          <Route path='alert' element={<DismisableAlert />} />
          <Route path='grid' element={<BootStrapGrid />} />
          <Route path='card' element={<BootStrapCard />} />
          <Route path='navbar' element={<BootStrapNavBar />} />
          <Route path='carousel' element={<BootStrapCarousel />} />
        </Route>


      </Routes>
    </div>
  );
}

export default App;
