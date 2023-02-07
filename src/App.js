import React,{useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

//test

function App() {
  const [alert,setAlert]= useState(null)
  const showAlert = (message)=>{
    setAlert({
      msg: message
    })
    setTimeout(()=>{
      setAlert(null)
    },2000);
  }
  return (
    <div>
      <Navbar title = 'TextUtils' about = 'About' />
      <Alert alert={alert}/>
      <TextForm showAlert={showAlert} heading= 'Enter the text to analyze' /> 
      {/* <About showAlert={showAlert} /> */}

      {/* <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading= 'Enter the text to analyze' /> 
          </Route>
          <Route path="/about">
            <About showAlert={showAlert} />
          </Route>
        </Switch>
      </div>
    </Router> */}
    </div>
  );
}

export default App;
