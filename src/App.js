import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import HomeScreen from './components/home/HomeScreen';
import NavBar from './components/menu/NavBar';
import Services from './components/section/Services'
import WebApplications from './components/section/WebApplications';

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route path="/" exact component={HomeScreen} /> 
        <Route path="/services" exact component={Services} />
        <Route path="/website" exact component={WebApplications} />    
      </Switch>

    </Router>
  );
}

export default App;
