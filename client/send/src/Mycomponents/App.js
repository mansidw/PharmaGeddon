import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Signup from "./Sign/Signup"
import Know from "./Basics/KnowMore"
//import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// import Dashboard from "./Dashboard"
import Login from "./Sign/Login"
import Pay from "./Basics/Pay"
import Myhome from "./My Profile/Myhome"
//import PrivateRoute from "./PrivateRoute"
//import ForgotPassword from "./Sign/ForgotPassword"
// import UpdateProfile from "./UpdateProfile"
import Landing from "./Basics/Landing"
//import Myprofile from "./Sign/Myprofile"
// import Chat from "./Chats/Chat"
import AboutUs from "./Basics/AboutUs";
import Cart from "./My Profile/Cart"
import Upload from "./My Profile/Upload"
import History from "./My Profile/History"
import '../css/app.css'
import Chat from "../Mycomponents/Basics/Chat"
import Map from "../Mycomponents/Basics/Map"
import ConfirmOrder from "../Mycomponents/Basics/ConfirmOrder"
//import LocationWise from "./ShowJobs/LocationWise";
//import Chat_api from "./Chats/Chat_api";
//import AskQuestion from "./Chats/AskQuestion"

function App() {
  return (
        <Router>
          
          
          
              <Switch>
                {/* <PrivateRoute exact path="/" component={Dashboard} /> */}
                
                {/* <PrivateRoute path="/update-profile" component={UpdateProfile} /> */}
                
                <Route exact path="/" component={Landing} />
                <Route path="/chat" component={Chat} />
                <Route path="/pay" component={Pay} />
                <Route path="/about" component={AboutUs} />
                <Route path="/myhome" component={Myhome} />
                <Route path="/cart" component={Cart} />
                <Route path="/upload" component={Upload} />
                <Route path="/history" component={History} />
                <Route path="/know" component={Know} />
                <Route path="/map" component={Map} />
                <Route path="/confirm" component={ConfirmOrder} />
          
                <div className="outer">
                <div className="inner">
                  
                  <Route path="/signup" component={Signup} />
                  <Route path="/login" component={Login} />
                  
                </div>
                </div>
                
              </Switch>
          
        </Router>
  )
}

export default App
