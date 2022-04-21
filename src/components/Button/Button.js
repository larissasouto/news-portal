import React from 'react';

import './Button.scss';

function Button({source}) { 
  return (
    <button className="button" 
      onClick={(e) => {
      e.preventDefault();
      window.open(source)}
    }
    >
      <text className="button-label">
        Ver mais
      </text>
    </button>
    
  );
}

export default Button;
