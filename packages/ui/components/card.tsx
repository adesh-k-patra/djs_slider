import React from "react"
import ColorInput from "./colorInput"

interface CardProps {
  setColor: React.Dispatch<React.SetStateAction<number[]>>
}

const Card: React.FC<CardProps> = ({ setColor }) => {
  return (
    <div className="ml-5 mt-3 rounded-2xl border-2 border-black shadow-none px-4 py-1 grid grid-rows-3 text-background">
      <div className="row-span-1">CHOOSE INITIAL COLOR</div>
      <div className="row-span-2 flex justify-center py-1.5">
        <ColorInput setColor={setColor} type="red" />
        <ColorInput setColor={setColor} type="green" />
        <ColorInput setColor={setColor} type="blue" />
        <div className="my-auto pl-2">in %</div>
      </div>
    </div>
  )
}

export default Card
