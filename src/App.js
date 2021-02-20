import './App.scss';
import Homepage from './components/Homepage/Homepage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Resume from './components/Resume/Resume';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <Router>
      <Switch>
      <div>
        <Navigation />
        <Route exact path='/' component={Homepage} />
        <Route exact path='/resume' component={Resume} />
        <Route exact path='/work' component={Work} />
        <Route exact path='/contact' component={Contact} />
      </div>
      </Switch>
    </Router>
  );
}

export default App;
