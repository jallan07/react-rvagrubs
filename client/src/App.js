import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <div className="mx-5">
        <Navigation />
      </div>
      <header className="App-header">
        <img src="/img/RVA_GrumbsLogo-02.png" className="App-logo" alt="logo" />
        <h3>Future home of RVA GRUBS</h3>
        <p>More coming soon...</p>
      </header>
    </div>
  );
}

export default App;
