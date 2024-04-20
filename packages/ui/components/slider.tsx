import React from "react"
import ReactSlider from "react-slider"

interface SliderProps {
  value: number
  setValue: React.Dispatch<React.SetStateAction<number>>
}

const Slider: React.FC<SliderProps> = ({ value, setValue }) => {
  return (
    <ReactSlider
      className="flex justify-center w-full"
      trackClassName="w-2/12 rounded-full"
      thumbClassName="rounded-full w-16 h-16 bg-white outline-none cursor-pointer"
      orientation="vertical"
      value={value}
      onChange={(newValue: number) => {
        setValue(newValue)
      }}
      renderTrack={(props, state) => {
        const isPrimaryTrack = state.index === 0
        return (
          isPrimaryTrack && (
            <div
              {...props}
              style={{
                backgroundColor: `rgb(0%,0%,${100 - state.value}%)`,
                boxShadow: `0 0 5px rgb(0%,0%,${100 - state.value}%)`,
              }}
            />
          )
        )
      }}
    />
  )
}

export default Slider
