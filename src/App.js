import { useState } from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React from "react";




import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')

  const [alert, setAlert] = useState(null)

  const showalert = (msg,type) => {
    setAlert({
      msg:msg,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }


  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      showalert('Dark mode enable', 'success')
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showalert('Light mode enable', 'success')
    }
  }
  return (
    <>
       <Router>
      <Navbar title='TextCraft Pro' mode={mode} togglemode={togglemode} />
      {/* <SearchBar/> */}
      <Alert alert={alert} />
      <div className="container my-3">
      <Routes>
        <Route path="/about"  element={<About  mode={mode}/>} />
        {/* <About/> */}
        {/* </Route> */}
        <Route path="/"  element={<TextForm showalert={showalert} textarea = 'Try To Manipulate Your Text...' mode={mode} />} />
        {/* <TextForm showalert = {showalert} textarea='Enter Here To Analyze...' mode={mode} /> */}
        
      </Routes>
      </div>
      {/* <TextForm showalert = {showalert} textarea='Enter Here To Analyze...' mode={mode} /> */}

      {/* <About mode={mode} /> */}

      <Footer />
      
      </Router>
    </>

  );
}

export default App;
