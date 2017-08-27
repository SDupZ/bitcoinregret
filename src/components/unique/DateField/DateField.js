import React from 'react';
import './styles.css';


function DateField(props) {
  const {day, month, year} = props    

  return (
    <div className="dateFieldWrapper">
      <div className="input">
        <span className='day'>{day}</span>    
        <span className='month'>{month}</span>
        <div className='year'>{year}</div>  
      </div>     
    </div>
  )
}

export default DateField