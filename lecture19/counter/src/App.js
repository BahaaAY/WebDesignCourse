import "./App.css";

import { useState } from "react";

function App() {
  let [num, setNum] = useState(0);

  return (
    <div className="counter">
      <button onClick={() => setNum(++num)}>+</button>
      <p>{num}</p>
      <button onClick={() => setNum(--num)}>-</button>
    </div>
  );
}

export default App;
