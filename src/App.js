import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import HomeScreen from './components/home/HomeScreen';
import NavBar from './components/menu/NavBar';

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route path="/" exact component={HomeScreen} />     
      </Switch>

    </Router>
  );
}

export default App;
