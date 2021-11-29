import './App.css';
import SignIn from './Components/Signin/SignIn';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path = "/home" element = {<Home/>}>
          </Route>
          <Route exact path = "/" element = {<SignIn/>}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
