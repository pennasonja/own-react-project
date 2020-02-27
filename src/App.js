import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Services from './Services';
import Contact from './Contact';
import './App.css';

function App() {
  
  return (<Router>
    <div className="App">
      <div class="header">
        <h1>Eläinasema</h1>
          <p>Vain <b>parasta</b> lemmikillesi.</p>
      </div>
      <nav className="navbar">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link" to={"/"}> Etusivu</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/palvelut"}>Palvelut</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/otayhteytta"}>Ota yhteyttä</Link>
              </li>
              <li className="nav-item" >
                <Link className="nav-link" to={"/kirjaudu"}>Kirjaudu sisään</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="main">
        <div className="main-inner">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path ="/palvelut" component={Services} />
            <Route path="/kirjaudu" component={Login} />
            <Route path="/otayhteytta" component={Contact} />
          </Switch>
        </div>
      </div>

      <div class="footer">
        <p><b>Yhteystiedot</b></p>
        <p>Kotikatu <br></br>02100 Espoo<br></br>+358 000 0000</p>
      </div>
    </div>
    </Router>
  );
}

export default App;
