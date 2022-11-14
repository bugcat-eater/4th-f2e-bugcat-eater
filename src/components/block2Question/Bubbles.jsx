export default function Bubbles(props) {
  const { image, style } = props
  return (
    <div className='absolute' style={style}>
      <img src={image} alt="" className="h-full m-auto" />
    </div>
  )
}
