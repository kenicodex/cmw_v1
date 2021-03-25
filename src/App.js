import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Confirm from './Components/Confirm/Confirm';
import Dashboard from './Components/Dashboard/Dashboard';
import Home from './Components/Home/Home';
import Notfound from './Components/Notfound/Notfound';
import Order from './Components/Order/Order';
import Shot from './Components/Shot/shot';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/order" component={Order} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/confirm" component={Confirm} />
            <Route path="/shot" component={Shot} />
            <Route path="*"  component={Notfound} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
