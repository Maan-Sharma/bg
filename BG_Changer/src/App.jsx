import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("cyan")

  return (
    <div className="w-full h-screen duration-200" style={{ background: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-9 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={() => setColor("red")} className="outline-none px-4 rounded-full text-white" style={{ background: "red" }}>Red</button>
          <button onClick={() => setColor("blue")} className="outline-none px-4 rounded-full text-white" style={{ background: "blue" }}>Blue</button>
          <button onClick={() => setColor("green")} className="outline-none px-4 rounded-full text-white" style={{ background: "green" }}>Green</button>
          <button onClick={() => setColor("yellow")} className="outline-none px-4 rounded-full text-white" style={{ background: "yellow" }}>Yellow</button>
          <button onClick={() => setColor("purple")} className="outline-none px-4 rounded-full text-white" style={{ background: "purple" }}>Purple</button>
          <button onClick={() => setColor("orange")} className="outline-none px-4 rounded-full text-white" style={{ background: "orange" }}>Orange</button>
          <button onClick={() => setColor("cyan")} className="outline-none px-4 rounded-full text-white" style={{ background: "cyan" }}>Cyan</button>
        </div>
      </div>
    </div>
  )
}

export default App
