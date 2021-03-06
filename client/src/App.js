// utils

// components
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Home from './layouts/Home';
import Newsfeed from './layouts/Newsfeed';

// routing
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// styles
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/feed" component={Newsfeed} />
      </Switch>
    </Router>
  );
}

export default App;
