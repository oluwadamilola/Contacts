import React, { useState } from "react";

import { Button } from "../Button";

export default function CreateContact() {
  const [contact, setContact] = useState(false);

  return (
    <div className="App">
    
      <Button className="button1" onClick={() => setContact(!contact)}>
        Create contact
      </Button>
    </div>
  );
}



