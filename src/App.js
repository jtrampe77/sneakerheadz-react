import { Route, Routes } from "react-router-dom";
import {DashBoardPage, LoginPage, AboutUsPage, PageNotFound} from './pages'




function App() {
 
  return (
  <>
  

    <Routes>
      <Route index element={<LoginPage />} />
      <Route path="dashboard" element={<DashBoardPage />} />
      <Route path="about" element={<AboutUsPage />} />
      <Route path="*" element={<PageNotFound/>} />
    </Routes>
  
  </>
          

  );
}

export default App;

 
 