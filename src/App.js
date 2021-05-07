import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Footer from './components/footer/Footer';
import HomeScreen from './components/home/HomeScreen';
import NavBar from './components/menu/NavBar';
import ScrollTop from './components/section/ScrollTop';
import Services from './components/section/Services'
import WebApplications from './components/section/WebApplications';

function App() {
  return (
    <Router>
      <ScrollTop />
      <NavBar/>
      <Switch>
        <Route path="/" exact component={HomeScreen} /> 
        <Route path="/services" exact component={Services} />
        <Route path="/website" exact component={WebApplications} />    
      </Switch>
      <Footer/>

    </Router>
  );
}

export default App;
