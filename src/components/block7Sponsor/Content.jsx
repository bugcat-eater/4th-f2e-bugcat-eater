/* Images */
import BlockStudio from "../../assets/BlockStudio_logo.png";
import DottedSign from "../../assets/DottedSign_logo.png";
import Jira from "../../assets/Jira_logo.svg";
import KDAN from "../../assets/KDAN_logo.png";
import miro from "../../assets/miro_logo.svg";
import TITANSOFT from "../../assets/TITANSOFT_logo.png";

const Image = (props) => {
  const { img, url } = props;

  return (
    <div className="category-item m-8">
      <a href={url} target="_blank">
        <img className="category-item__img" src={img} />
      </a>
    </div>
  );
};

export default function Content() {
  return (
    <section className=" m-3 p-5">
      <h3 className="text-center text-4xl mb-3">
        <span className="text-violet-700 font-bold">鑽石級</span>贊助商
      </h3>
      <div className="sponsor flex flex-wrap justify-center">
        <Image img={BlockStudio} url="https://blockstudio.tw/" />
        <Image img={TITANSOFT} url="https://titansoft.com/tw" />
        <Image img={KDAN} url="https://www.kdanmobile.com/zh-tw" />
      </div>
      <h3 className="text-center text-3xl my-3">共同推廣</h3>
      <div className="promotion flex flex-wrap justify-center">
        <Image img={Jira} url="https://titansoft.com/tw/go_jira" />
        <Image img={miro} url="https://titansoft.com/tw/get_miro" />
        <Image img={DottedSign} url="https://www.dottedsign.com/zh-tw" />
      </div>
    </section>
  );
}
