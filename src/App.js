import React from "react";
import Button from './button/Button';
import { useState } from "react";

const App = () => {
    let [count, setCount ] = useState(0) ;
  
    const incrementCount = increment => {
      setCount(count + increment)
    }
  
    return (
      <div className="wrapper">
        <Button increment={1} onClickFunction={incrementCount} />
        <Button increment={10} onClickFunction={incrementCount} />
        <Button increment={100} onClickFunction={incrementCount} />
        <Button increment={1000} onClickFunction={incrementCount} />
        <p className="counter">{count}</p>
      </div>
    )
  }

  export default App;