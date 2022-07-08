
import './App.scss';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Team from "./pages/team";

function App() {
  return (
    <div className="App">
      <Router >
        {/* <Router> */}
        <>
          <div className='website'>

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
