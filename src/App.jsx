import { useState } from "react"
function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    <div className="fixed flex flex-wrap justify-center inset-x-0 pt-5 text-2xl">
      <div className="fixed flex flex-wrap justify-center gap-4 shadow-lg bg-white px-2 py-1 rounded-3xl">
        <button onClick={() => setColor("red")} className="outline-none px-2 py-1 rounded-full text-white shadow-md" style={{backgroundColor: "red"}}>Red</button>

        <button onClick={() => setColor("yellow")} className="outline-none px-2 py-1 rounded-full text-black shadow-md" style={{backgroundColor: "yellow"}}>Yellow</button>

        <button onClick={() => setColor("green")} className="outline-none px-2 py-1 rounded-full text-white shadow-md" style={{backgroundColor: "green"}}>Green</button>

        <button onClick={() => setColor("blue")} className="outline-none px-2 py-1 rounded-full text-white shadow-md" style={{backgroundColor: "blue"}}>Blue</button>

        <button onClick={() => setColor("gray")} className="outline-none px-2 py-1 rounded-full text-black shadow-md" style={{backgroundColor: "gray"}}>Gray</button>

        <button onClick={() => setColor("aqua")} className="outline-none px-2 py-1 rounded-full text-black shadow-md" style={{backgroundColor: "aqua"}}>Aqua</button>

        <button onClick={() => setColor("purple")} className="outline-none px-2 py-1 rounded-full text-white shadow-md" style={{backgroundColor: "purple"}}>Purple</button>

        <button onClick={() => setColor("black")} className="outline-none px-2 py-1 rounded-full text-white shadow-md" style={{backgroundColor: "black"}}>Black</button>

        <button onClick={() => setColor("pink")} className="outline-none px-2 py-1 rounded-full text-black shadow-md" style={{backgroundColor: "pink"}}>Pink</button>

        <button onClick={() => setColor("greenyellow")} className="outline-none px-2 py-1 rounded-full text-black shadow-md" style={{backgroundColor: "greenyellow"}}>Greenyellow</button>

        <button onClick={() => setColor("orange")} className="outline-none px-2 py-1 rounded-full text-black shadow-md" style={{backgroundColor: "orange"}}>Orange</button>

        <button onClick={() => setColor("olive")} className="outline-none px-2 py-1 rounded-full text-white shadow-md" style={{backgroundColor: "olive"}}>Olive</button>

        <button onClick={() => setColor("brown")} className="outline-none px-2 py-1 rounded-full text-white shadow-md" style={{backgroundColor: "brown"}}>Brown</button>
      </div>
    </div>
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
    </div>
    </>
  )
}

export default App
