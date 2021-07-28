import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import './App.css';
import AddUser from './Components/AddUser';
import AllUsers from './Components/AllUsers';
import EditUser from './Components/EditUser';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import NotFound from './Components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>

        {/* ROUTE CHECK IN URL */}
        <Route exact path="/all" component={AllUsers}></Route>
        <Route exact path="/add" component={AddUser}></Route>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/edit/:id" component={EditUser}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
