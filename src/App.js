import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import About from './components/About';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);
  

  const showalert=(message,type)=>{
    setalert({
      msg: message,
      tp: type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#B2BEB5';
      showalert("Dark Mode has been enabled","success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showalert("Light Mode has been enabled","success");
    }
  }
  return (
    <>
      <Router>
      <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} about="About Us"></Navbar>
      <Alert alert={alert}></Alert>
      <div className="container my-3">
      <Routes>
        <Route exact path="/" element={<TextForm showalert={showalert} heading="Enter text to Analyse below"></TextForm>}> 
        </Route>
        <Route exact path="/about" element={<About />}>
        </Route>
      </Routes>
      </div>
      </Router>
      {/* <TextForm showalert={showalert} heading="Enter text to Analyse below"></TextForm> */}

      {/* <About></About> */}
    </>
  );
}

export default App;
