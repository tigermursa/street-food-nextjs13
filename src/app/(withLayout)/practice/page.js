"use client";

import React, { useState } from "react";

const The = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>ami asi{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>baraw</button>
      <br />
      <button onClick={() => setCount((p) => p -1)}>Komaw</button>
    </div>
  );
};

export default The;
