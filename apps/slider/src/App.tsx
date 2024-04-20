import React, { useState } from "react"
import Slider from "@repo/ui/slider"
import Button from "@repo/ui/button"

function App(): JSX.Element {
  const [value, setValue] = useState<number>(100)
  const [on, setOn] = useState<boolean>(false)
  const [off, setOff] = useState<boolean>(false)

  return (
    <div className="flex justify-center h-screen py-5 bg-background">
      <div
        className="rounded-3xl grid grid-cols-2 w-5/12 h-full p-5 shadow-2xl shadow-black"
        style={{ backgroundImage: `url(public/1.png)` }}
      >
        <div className="rounded-l-3xl border-r-2 border-black grid grid-rows-2 py-20">
          <Button
            type={1}
            setValue={setValue}
            state={on}
            setState={setOn}
            setAntiState={setOff}
          />
          <Button
            type={2}
            setValue={setValue}
            state={off}
            setState={setOff}
            setAntiState={setOn}
          />
        </div>
        <div className="rounded-r-3xl border-l-2 border-black flex justify-center">
          <div className="w-5/12 bg-dark my-32 rounded-full flex justify-center py-6 shadow-none">
            <Slider on={on} off={off} value={value} setValue={setValue} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
