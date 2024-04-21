import React, { useState } from "react"
import Slider from "@repo/ui/slider"
import Button from "@repo/ui/button"
import Card from "@repo/ui/card"

function App(): JSX.Element {
  const [value, setValue] = useState<number>(100)
  const [on, setOn] = useState<boolean>(false)
  const [off, setOff] = useState<boolean>(false)
  const [color, setColor] = useState<number[]>([0, 0, 0])

  return (
    <div className="flex justify-center h-screen py-5 bg-background">
      <div
        className="rounded-3xl grid grid-cols-2 w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 h-full px-5 py-5 shadow-none shadow-black"
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
        <div className="rounded-r-3xl border-l-2 border-black grid grid-rows-12">
          <div className="w-5/12 bg-dark mt-32 mb-2 mx-auto rounded-full row-span-10 flex justify-center py-6 shadow-none">
            <Slider
              on={on}
              off={off}
              value={value}
              setValue={setValue}
              color={color}
            />
          </div>
          <div className="row-span-2">
            <Card setColor={setColor} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
