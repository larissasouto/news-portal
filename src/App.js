import Button from "./componentes/Button/Button";
import Heading from "./componentes/Heading/Heading";
import Paragraph from "./componentes/Paragraph/Paragraph";

import "./App.css";

function App() {
  return( 
    <div className="container">
      <Button />
      <Heading title="Heading" />
      <Paragraph />
    </div>
  );
}

export default App;
