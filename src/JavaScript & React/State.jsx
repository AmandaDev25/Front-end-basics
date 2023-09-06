import { useState } from "react"
export default function State() {
  const [color, setColor] = useState("red");
  return (
    <>
      <div style={{ height: '450px' }}>
        <img src="/public/hooks.png" alt="Hooks" height={80} />
        <p>O Use State assim como o nome sugere serve para mudar o estado da nossa aplicação. Vamos ver um exemplo com cores</p>
        <h1 style={{ color: color }}>My favorite color is {color}!</h1>
        <button
          type="button"
          onClick={() => setColor("blue")}
        >Blue</button>
      </div>
    </>
  )
}