import React from 'react';

import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import Paragraph from "../Paragraph/Paragraph";
import Subtitle from "../Subtitle/Subtitle";

import "./CardContent.scss";

function CardContent() {
  return (
    <div className="shape">
      <Heading title="Heading SM" />
      <Subtitle subtitle="Subtitle SM" />
      <Paragraph 
        text="Aute commodo proident minim dolor. Fugiat ad est consectetur laborum et incididunt cupidatat incididunt pariatur duis id consectetur non.
        Dolor nostrud est laboris proident aute cupidatat eu esse. Adipisicing anim anim mollit adipisicing aliqua esse nostrud velit reprehenderit 
        culpa officia voluptate. Sit commodo eu ad qui culpa laboris irure nostrud. Id mollit cupidatat nisi in occaecat tempor dolore non. 
        Occaecat Lorem amet dolore minim. Dolore velit incididunt occaecat nisi est est proident ex proident anim commodo elit consequat. 
        Tempor occaecat quis tempor esse quis. Ut ex ullamco occaecat sit enim non non culpa eu in cillum culpa pariatur nostrud. 
        Adipisicing est fugiat consequat incididunt laboris." 
      />
      <Button />  
    </div>
  );
}

export default CardContent;