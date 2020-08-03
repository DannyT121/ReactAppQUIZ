import React from 'react'
import './custom.css'



const ProgressBar = (props) => {
    const { bgcolor, completed } = props;
      
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right'
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold'
    }
  
    return (
      <>
      <div className="containerStyles">
        <div style={fillerStyles} className="fillerStyles">
          <span className="labelStyles">{`${completed}%`}</span>
        </div>
      </div>
      <p>progress  Bar</p>
      </>
    );
  };
  
  export default ProgressBar;