import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState();
  return <div>{count}</div>;
};

export default Counter;
