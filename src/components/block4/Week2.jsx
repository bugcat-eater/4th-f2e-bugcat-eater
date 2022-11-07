import React from 'react'

export default function Week2() {
  return (
    <section className='flex '>
      <div className='w-2/4 h-screen bg-[#FFFF00] text-black  flex justify-center content-center'>
        <div className=' self-center  '>
          <h2 className='m-auto text-[100px] font-[900] '>WEEK 2</h2>
          <div className='mt-[60px] text-[52px] font-[900]'>
            <span className='block'>今晚,</span>
            <span className='block'>我想來點點簽</span>
          </div>
          <span className='block mt-[50px] text-[32px] font-[600]'>JS draggble</span>
          <span className='block mt-[32px] text-[32px] font-[600]'>＃凱鈿行動科技</span>
          <div className='flex justify-center'>
            <a href="#" className='inline-block mt-[30px] text-center text-[20px] bg-[#3A3A3A] hover:bg-white hover:text-black transition duration-500 delay-150 text-white font-bold py-2 px-4 rounded-full font-[600]'>查看關卡細節</a>
          </div>
          
        </div>     
      </div>
      <div className='w-2/4 bg-[#E8E81F] relative'>
        
      </div>
    </section>
  )
}
