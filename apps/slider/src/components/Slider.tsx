import ReactSlider from "react-slider"
import "../App.css"
export default function Slider({ setValue }) {
  return (
    <ReactSlider
      className="flex justify-center w-full"
      trackClassName="w-2/12 bg-green-600 rounded-full"
      thumbClassName="rounded-full w-16 h-16 bg-white outline-none"
      orientation="vertical"
      defaultValue={0}
      onChange={(value) => {
        setValue(value)
      }}
    />
  )
}
