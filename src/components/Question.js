import React, { useState }  from 'react'
import './custom.css'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import { colors } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import questionArray from './questionArray';



function Question(prpos)
{
  
    const useStyles = makeStyles(theme => ({
        root: {
          width: '40', 
          color:'black',
        },
        margin: {
          height: theme.spacing(3)
        }
      }));


    const marks = [
        {
          value: 0,
          label: '0',
        }, {
            value: 1,
            label: '1',
          }, {
            value: 2,
            label: '2',
          }, {
            value: 3,
            label: '3',
          }, {
            value: 4,
            label: '4',
          },
        {
          value: 5,
          label: '5',
        },
        {
          value: 6,
          label: '6',
        },
        {
            value: 7,
            label: '7',
          }, {
            value: 8,
            label: '8',
          }, {
            value: 9,
            label: '9',
          },
        {
          value: 10,
          label: '10',
        },
      ];

      
function valuetext(value) {
    return `${value}`;
  }

   
    const classes = useStyles();
    const [value,setValue]=useState(0)
    const [Count,setCount]=useState(0)
   
  const hadleChange=(e,newValue)=>{
        setValue(newValue)
        prpos.passSum(prev=>prev+newValue);
        prpos.passCount(Count=>Count+1);

        
  }
 
    return (
    <>
      {questionArray.map((user, index) => (
        <div key={index}>
        <div  className="question">
          
            <p > {user.question}</p><br />
            <span style={{textAlign:"end"}}> Never</span><span style={{marginLeft:"90%"}}> Always  </span>
            <div className="slideBar">
            <Slider className="sliderStyle"
            defaultValue={value}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider-custom"
            step={1}
            max='10'
            onChange={hadleChange}
            marks={marks}
            />
          </div>
          </div>
          
        </div>
         ))}  
         </> 
  )
  }
  export default Question 
