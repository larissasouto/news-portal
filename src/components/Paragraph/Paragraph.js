import React from 'react';

import './Paragraph.scss';

function Paragraph({text}) {
  return (
    <text className="paragraph-text">
      {text}
    </text>
  );
}

export default Paragraph;