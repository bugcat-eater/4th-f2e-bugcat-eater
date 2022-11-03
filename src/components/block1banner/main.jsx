import React from "react";
import thef2e from "../../assets/The_f2e.png"
import LeftMemubtn from "./leftMemubtn";


export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const menuBtnText = ["關卡資訊" , "攻略資訊" ,"求職專區"]

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white mb-3 fixed border-solid border-b-2 border-opacity-10 border-gray-900">
        <div className="border-solid border-gray-900 container px-9 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div className="flex justify-center content-center">
              <a
                className=" block py-1 flex content-center  "
                href="#href"
              >
                <img src={thef2e} className="object-fill h-3 w-24 mt-1 mr-5"></img>
              </a>
              <div className="align-middle pt">
                {menuBtnText.map( (text,index) => <LeftMemubtn key={index} text={text} />
                )}
              </div>
            </div>
          
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg className="w-6 h-6" aria-hidden="true" fill="bg-black" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>

            </button>
          </div>
          <div
            className={
              "lg:flex  items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >   
            
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              
              {
                menuBtnText.map( (text,index)=>{
                  return (
                    <li key={index} className=" lg:hidden  nav-item ">
                      <a
                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-900 hover:opacity-75"
                        href="#pablo"
                      >
                        <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">{text}</span>
                      </a>
                    </li>
                  )
                })
              }
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-900 hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">登入</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 bg-gray-900 rounded-md"
                  href="#pablo"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="">註冊報名</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}