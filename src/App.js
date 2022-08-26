
import './App.css';
import Lifecycle from './components/Lifecycle';
import List from './components/List';
import Register from './components/Register';
import Stateex from './components/Stateex';
import View from './components/View';
import Refsex from'./components/Refsex';
import Refex3 from './components/Refex3';
import Menu from './components/Menu';
import {BrowserRouter,Route} from 'react-router-dom';
import Lifecyclehw from './components/Lifecyclehw';
import Users from './components/Users';
import Emp from './components/Emp';
import Student from './components/Student';
import Home from './components/Home';
import Public from './components/Public';
import Login from './components/Login';
import{Link,NavLink} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import withHeader from './components/withHeader';
// import Dashboard from './components/Home';
import Dashboard from './components/Dashboard';
import Hookseg1 from './components/Hookseg1';
import Hookseg2 from './components/Hookseg2';
import InputFocus from './components/InputFocus';
import LogButtonClick from './components/LogButtonClick';
import Apidemo from './components/Apidemo';
import Apiex from './components/Apiex';
import PersonData from './components/PersonData';
import PersonData2 from './components/PersonData2';
import PersonData3 from './components/PersonData3';
import PersonData4 from './components/PersonData4';
import CheckFunctionalComponents from './components/CheckFunctionalComponents';
import Mettletech from './components/Mettletech';

function App() {
  return (
    <div>
      <Mettletech />
      {/* <Hookseg1/> */}
      {/* <Hookseg2/> */}
      {/* <InputFocus/> */}
      {/* <Apidemo/> */}
      {/* <Apiex/> */}
      {/* <PersonData3/> */}
      {/* <CheckFunctionalComponents/> */}
      {/* <LogButtonClick/> */}
    {/* <BrowserRouter> */}
      {/* <Route path="/" component={Menu}/>
      <Route path="/firstex" component={Refex3}/>
      <Route path="/users" component={Users}></Route>
      <Route path="/empinfo" component={Emp}></Route>
      <Route path="/studinfo" component={Student}></Route>
      <ul>
        <li>
          <Link to="/">Public</Link>
        </li>
        <li>
          <NavLink to="/login" activeStyle={{
            fontweight:"bold",
            color:"green",
            backgroundColor:"pink",
            fontStyle:"italic"
          }}>
            LOGIN

          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" activeStyle={{
            fontweight:"bold",
            color:"red",
            backgroundColor:"yellow",
            fontStyle:"italic"
          }}>
           DASHBOARD

          </NavLink>
        </li>
      </ul>
      <hr></hr> */}
      {/* <Route exact path="/" component={Public}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/dashboard" component={Home}/>
    </BrowserRouter>  */}
{/* //       <Dashboard title="Google"/> */}
    </div>

  );
 }

export default App;
    