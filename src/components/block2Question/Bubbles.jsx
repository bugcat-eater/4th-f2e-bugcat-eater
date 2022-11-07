export default function Bubbles({ image, attributes }) {
  // console.log(attributes);
  // const { top, left, size } = attributes
  // const customStyle = {}
  // if (top) {
  //   customStyle["top"] = top
  // }
  // if (left) {
  //   customStyle["left"] = left
  // }
  // if (size) {
  //   // customStyle["width"] = width
  // }

  return (
    <div className='absolute'>
      <img src={image} alt="" style={customStyle} />
    </div>
  )
}
