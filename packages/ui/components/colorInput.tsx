import React from "react"

interface ColorInputProps {
  type: "red" | "blue" | "green"
  setColor: React.Dispatch<React.SetStateAction<number[]>>
}

const ColorInput: React.FC<ColorInputProps> = ({ type, setColor }) => {
  return (
    <input
      className={`mx-2.5 w-10 rounded-lg shadow-none bg-black border outline-none text-center ${type === "red" ? "border-red-500" : type === "blue" ? "border-blue-500" : "border-green-500"}`}
      type="text"
      pattern="[0-9]*"
      maxLength={3}
      placeholder="0"
      onChange={(event) => {
        const value = event.target.value
        const intValue = parseInt(value, 10)
        if (!isNaN(intValue) && intValue >= 0 && intValue <= 100) {
          let index = 0
          if (type === "green") index = 1
          if (type === "blue") index = 2
          setColor((prevColor) => {
            const newColor = [...prevColor]
            newColor[index] = intValue
            return newColor
          })
        }
      }}
      onKeyDown={(event) => {
        const allowedKeys = [
          "Backspace",
          "Delete",
          "ArrowLeft",
          "ArrowRight",
          "Tab",
          "Home",
          "End",
        ]
        if (!allowedKeys.includes(event.key) && isNaN(parseInt(event.key))) {
          alert("Enter number between 0 to 100")
          event.preventDefault()
        }
      }}
    />
  )
}

export default ColorInput
