/* Images */
import click_svg from '../../assets/click.svg'
import flag_svg from '../../assets/flag.svg'
import quest_svg from '../../assets/quest.svg'
import video_svg from '../../assets/video.svg'

const stepInfomation = [
  {
    "title": "SIGN UP!",
    "context": ["開放報名", "10/13(四)早上11:00-11/6(日)晚上23:59"],
    "img": click_svg
  },
  {
    "title": "START!",
    "context": ["各組別開賽", "UI組、團體組開賽10/31、前端組開賽11/7"],
    "img": flag_svg
  }, {
    "title": "UPLOAD!",
    "context": ["登陸作品", "10/31(一)中午12:00-11/28(一)中午12:00"],
    "img": quest_svg
  }, {
    "title": "STREAM!",
    "context": ["線上直播", "11/3-11/24(每週四)"],
    "img": video_svg
  },
]

const Image = ({ img, url }) => {
  return (
    <div className="category-item m-8">
      <a href={url} target="_blank">
        <img className="category-item__img" src={img} />
      </a>
    </div>
  )
}

export default function Content() {
  return (
    <section className='flex justify-center bg-white m-3 p-5'>
      <div className='w-full outline outline-1 outline-black'>
        {stepInfomation.map(({ title, context, img }, index) => {
          if (index % 2) {
            return (
              <div className='row flex flex-row-reverse' key={index}>
                <div className='w-1/2 border-l-8 border-black'></div>
                <div className='outline_box lg:w-2/5 mx-10 flex flex-col items-end'>
                  <h3 className='text-3xl'>{title}</h3>
                  {context.map((text, index) => <p key={index}>{text}</p>)}
                  <Image img={img} />
                </div>
              </div>
            )
          } else {
            return (
              <div className='row flex' key={index}>
                <div className='ml-2 w-1/2 border-r-8 border-black'></div>
                <div className='outline_box lg:w-2/5 mx-10'>
                  <h3 className='text-3xl'>{title}</h3>
                  {context.map((text, index) => <p key={index}>{text}</p>)}
                  <Image img={img} />
                </div>
              </div>
            )
          }
        })}
      </div>
    </section >
  )
}
