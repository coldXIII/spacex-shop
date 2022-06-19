import React from 'react';


const Button = (props) => {
  return (
    <button className="Button" style={props.style} disabled={props.disabled}>
      <span> {props.title}</span>
    </button>
  );
};

export default Button;