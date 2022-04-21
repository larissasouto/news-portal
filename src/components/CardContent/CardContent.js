import React from 'react';

import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import Paragraph from "../Paragraph/Paragraph";
import Subtitle from "../Subtitle/Subtitle";

import "./CardContent.scss";

function CardContent({title, subtitle, paragraph, link}) {
  console.log(link);
  return (
    <div className="shape">
      <Heading title={title} />
      <Subtitle subtitle={subtitle} />
      <Paragraph 
        text={paragraph}
      />
      <Button source={link} />  
    </div>
  );
}

export default CardContent;