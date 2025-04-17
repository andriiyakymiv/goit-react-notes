import { useState, useEffect } from "react";

const UseEffectHook = () => {
  const [clicks, setClicks] = useState(0);

  return (
    <button onClick={() => setClicks(clicks + 1)}>
      You clicked {clicks} times
    </button>
  );
};

export default UseEffectHook;