// import Content from './Content'
// import Footer from './Footer'
// import Header from './Header'

export default function Background({ children }) {
  console.log(children);
  return (
    <section className='bg-green-50 m-3 p-5'>
      {children}
    </section>
  )
}
