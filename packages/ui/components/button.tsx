import React from "react"

interface ButtonProps {
  type: number
  setValue: React.Dispatch<React.SetStateAction<number>>
  state: boolean
  setState: React.Dispatch<React.SetStateAction<boolean>>
  setAntiState: React.Dispatch<React.SetStateAction<boolean>>
}

const Button: React.FC<ButtonProps> = ({
  type,
  setValue,
  state,
  setState,
  setAntiState,
}) => {
  return (
    <button
      className={`w-5/12 bg-background mx-auto m-12 rounded-full ${state ? (type == 1 ? "border-4 border-blue-500 shadow-on" : "border-4 border-red-500 shadow-off") : "shadow-none"}`}
      onClick={() => {
        setState(!state)
        setAntiState(false)
        setValue(100)
      }}
    ></button>
  )
}

export default Button
