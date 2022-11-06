export default function Award() {
  return (
    <div className="m-5 p-5 border border-violet-500 w-[560px]">
      <h1 className="text-5xl mb-10">獎項</h1>
      <ul>
        <li className="text-[22px]">初選佳作 共六十位 <span className="underline text-violet-700">數位獎狀</span></li>
        <li>每週主題個人組十位、團體組十組</li>
        <li className="text-[22px]">個人企業獎 共六位 <span className="underline text-violet-700">NTD 3,000/位</span></li>
        <li>每週主題各 2 名，設計 1 位、前端 1 位</li>
        <li className="text-[22px]">團體企業獎 共三組 <span className="underline text-violet-700">NTD 10,000/組</span></li>
        <li>每週主題各 1 組</li>
        <li className="text-[22px]">以上皆提供完賽數位獎狀</li>
      </ul>
    </div>
  )
}
