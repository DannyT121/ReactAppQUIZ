import React, { useState } from 'react';
import ReactDOM from 'react'
import logo from './logo.svg';
import './App.css';
import './components/custom.css'
import progress from './components/Greet'
import Question from './components/Question'
import ProgressBar from './components/custom'

import Button from '@material-ui/core/Button'
import { AccordionSummary } from '@material-ui/core';


function App() {

 const [Sum,setSum]=useState(0);
  const[Count,setCount]=useState(0);
  
 
    return (
   
    <div className="mainApp">
      <ProgressBar bgcolor= "#755BBC" completed= {Count*10} />
           <Question  
            passSum={setSum}
            passCount={setCount}
           />

     
      <center>
           {/* <Button   variant="contained" color="primary" disableElevation>Finish</Button> */}
      
      <b><p style={{backgroundColor:"white",width:"300px",height:"30px",fontFamily: "Arial",padding:"10px"}} > Result={Sum}/100  </p></b>
      </center>
     </div>
  )
};
  
 
   export default App;