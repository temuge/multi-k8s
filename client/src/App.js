
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <h1>Fib calculator</h1>
            <Link to="/">Home</Link>
            <Link to="/otherPage">Other Page</Link>
          </div>
          <div>
            <Route exact path="/" component={Fib} />
            <Route path="/otherPage" component={OtherPage} />
          </div>
        </div>
      </Router>
    );
  };
}

export default App;
