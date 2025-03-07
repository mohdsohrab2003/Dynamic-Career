import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import DashBoardHome from "./pages/DashBoard/DashBoardHome";
import "@fortawesome/fontawesome-free/css/all.min.css";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard-home" element={<DashBoardHome />} />
    </Routes>
  );
}

export default App;

// import {BrowserRouter as Outlet, Route, Routes } from 'react-router-dom'
// import './App.css'
// import Home from './pages/Home/Home'
// import DashBoardHome from './pages/DashBoard/DashBoardHome'

// function App() {

//   return (
//     <>
//     <Home/>
//     <Outlet/>
//     <Routes>
//       <Route path='/' element={<Home/>}/>
//       <Route path='/dashboard-home' element={<DashBoardHome/>}/>

//     </Routes>
//     </>
//   )
// }

// export default App
