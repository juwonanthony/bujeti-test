
import './App.scss';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Team from "./pages/team";
import ReactGA from 'react-ga';
import {API} from "./config/API/api.config";

if (API.GA_ID) {
  ReactGA.initialize(API.GA_ID);
}

function App() {
  return (
    <div className="App">
      <Router >
        {/* <Router> */}
        <>
          <div className='dahboard-main'>

            <div className="h-100 w-100  ">
              <Header />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/team" component={Team} />

              </Switch>

            </div>
          </div>
        </>

      </Router>
    </div>
  );
}

export default App;
