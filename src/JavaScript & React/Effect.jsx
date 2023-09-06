import { useState, useEffect } from "react";

export default function Effect() {

  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]);

  return (
    <>
      <div style={{ height: '400px' }}>
      <img src="/public/hooks.png" alt="Hooks" height={80} />
        <p> O Use Effect executa o ação da aplicação. Vamos ver um exemplo com números logo abaixo</p>
        <h4>Use Effect</h4>
        <p>Count: {count}</p>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
        <p>Calculation: {calculation}</p>
      </div>
    </>
  )
}