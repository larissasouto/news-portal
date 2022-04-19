import React from 'react';
import './Heading.scss';

function Heading({title}) {
  return (
    <text className="heading-text">{title}</text>
  );
}

export default Heading;