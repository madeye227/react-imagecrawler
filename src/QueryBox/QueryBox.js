import React from 'react'
import './QueryBox.css'
const querybox = (props) => {
  const inputStyle = {
    height: '42px',
    width: '60%',
  };

  const input2Style = {
    height: '42px',
    width: '40px',
  };

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  return (
    <div className="QueryBox">
    URL:<input style={inputStyle}type="text" onChange={props.changed} value={props.url}/>
    Depth:<input style={input2Style}type="text" onChange={props.changed} value={props.depth}/>
    <button
      style={style}
      onClick={props.click}>Query</button>
    </div>
  )
}

export default querybox;
