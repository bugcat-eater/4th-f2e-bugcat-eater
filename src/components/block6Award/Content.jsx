import Award from './Award'
import Review from './Review'

export default function Content() {
  return (
    <section className='flex justify-center bg-green-50 m-3 p-5'>
      <Review />
      <Award />
    </section>
  )
}
