import Navbar from './Navbar';
import Home from './home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './create';
import Blogdetails from './Blogdetails';
import Notfound from './Notfound';


function App() {

  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className='content'>
          <Switch>
            <Route exact path="/">
              <Home />

            </Route>
            <Route path="/Create">
              <Create />

            </Route>
            <Route path="/blogs/:id">
              <Blogdetails />

            </Route>
            <Route path="*">
              <Notfound />

            </Route>
          </Switch>


        </div>
      </div>
    </Router>
  );
}

export default App;
