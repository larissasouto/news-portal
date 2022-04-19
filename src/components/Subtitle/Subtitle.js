import React from 'react';
import './Subtitle.scss';

function Subtitle({subtitle}) {
  return (
    <text className="subtitle-text">
     {subtitle}
    </text>
  );
}

export default Subtitle;