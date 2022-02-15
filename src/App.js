import DashBoardPage from "./pages/DashBoardPage";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LoginPage from "./pages/LoginPage";
import {AppBar} from "./components/appbar";
import { FootBar } from "./components/footbar";
import { HeroBanner } from "./components/herobanner";

function App() {
 
  return (
  <Router>
    <AppBar />
    <HeroBanner />
      <Switch>

        <Route exact path="/">
        <DashBoardPage /> 
        </Route>

        <Route path="/login">
          <LoginPage />
        </Route>


      </Switch>
      <FootBar />
    
  </Router>
          

  );
}

export default App;

 
 