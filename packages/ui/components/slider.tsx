import React from "react"
import ReactSlider from "react-slider"

interface SliderProps {
  on: boolean
  off: boolean
  value: number
  setValue: React.Dispatch<React.SetStateAction<number>>
}

const Slider: React.FC<SliderProps> = ({ on, off, value, setValue }) => {
  return (
    <ReactSlider
      className="flex justify-center w-full"
      trackClassName="w-3/12 rounded-full"
      thumbClassName={`rounded-full w-16 h-16 bg-white outline-none cursor-pointer border-2 ${on ? "border-blue-500" : off ? "border-red-500" : "border-slider"} shadow-slider`}
      orientation="vertical"
      value={value}
      disabled={off}
      onChange={(newValue: number) => {
        setValue(newValue)
      }}
      renderTrack={(props, state) => {
        const isPrimaryTrack = state.index === 0
        const value = 100 - state.value
        return (
          isPrimaryTrack && (
            <div
              {...props}
              style={
                on
                  ? {
                      backgroundColor: `rgb(0%,0%,${value}%)`,
                      boxShadow: `0 0 ${0.1 * value}px 2px rgb(0%,0%,${value}%)`,
                    }
                  : {
                      backgroundColor: `rgb(0%,0%,0%)`,
                      boxShadow: `0 0 0 2px rgb(0%,0%,0%)`,
                    }
              }
            />
          )
        )
      }}
    />
  )
}

export default Slider
