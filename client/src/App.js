// utils
import { Container } from 'react-bootstrap';
// components
import Navigation from './components/Navigation';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
// routing
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// styles
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: '100vh' }}
    >
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </Router>
      </div>
    </Container>
  );
}

export default App;
