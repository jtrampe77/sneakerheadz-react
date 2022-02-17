import { Route, Routes } from "react-router-dom";
import {DashBoardPage, LoginPage, AboutUsPage, PageNotFound} from './pages'

import {AppBar} from "./components/appbar";
import { FootBar } from "./components/footbar";


function App() {
 
  return (
  <>
    <AppBar />

    <Routes>
      <Route index element={<LoginPage />} />
      <Route path="dashboard" element={<DashBoardPage />} />
      <Route path="about" element={<AboutUsPage />} />
      <Route path="*" element={<PageNotFound/>} />
    </Routes>
    <FootBar />
  </>
          

  );
}

export default App;

 
 