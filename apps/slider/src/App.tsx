import Slider from "@repo/ui/slider"
import Button from "@repo/ui/button"
import { useState } from "react"

function App() {
  const [value, setValue] = useState(0)
  console.log(value)
  return (
    <div className="flex justify-center h-screen">
      <div className="bg-black w-5/12 h-full">
        <div className="rounded-2xl grid grid-cols-2 h-full p-5 ">
          <div className="bg-gray-500 rounded-2xl border-r border-black grid grid-rows-2 py-20">
            <Button />
            <Button />
          </div>
          <div className="bg-red-300 rounded-2xl border-l border-black flex justify-center">
            <div className="w-5/12 bg-slate-600 my-32 rounded-full flex justify-center py-6">
              <Slider value={value} setValue={setValue} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
