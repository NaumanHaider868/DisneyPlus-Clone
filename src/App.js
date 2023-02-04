import './App.css';
import Login from './componets/Login';
import { Switch, Route } from 'react-router-dom'
import Header from './componets/Header';
import Home from './componets/Home';
import Details from './componets/Details';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/detail/:id/">
          <Details />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
