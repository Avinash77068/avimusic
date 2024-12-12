import { IoSunnyOutline } from "react-icons/io5";
import { BsMoonStarsFill } from "react-icons/bs";
import { useContext } from "react";
import { Context } from "../Context/Context";

export default function Header({isopen,setisopen}:any) {
  let { toogleEvent, setToogleEvent,store,setCheckData }: any = useContext(Context);

  const handleEvent = () => {
    if (toogleEvent.bgcolor === "black") {
      setToogleEvent({
        bgcolor: "white",
        color: "black",
        component: <BsMoonStarsFill />,
      });
    } else {
      setToogleEvent({
        bgcolor: "black",
        color: "white",
        component: <BsMoonStarsFill />,
      });
    }
  };
  const HideSidebar = () => {
    console.log("Sidebar hidden");
    
    setisopen(!isopen)
    console.log(store)
  };
  const sendData=(e:any)=>{
    setCheckData(e.target.value.replace(/\s{2,}/g, ' ').trim(" ") )
  }
  
  return (
    <div className={`bg-${toogleEvent.bgcolor} -mt-1 z-50 text-${toogleEvent.color} flex md:justify-between lg:justify-between fixed w-full sm:flex-nowrap   `}>
      <ul className="flex px-5 py-4 text-[20px]">
        <li className="pr-4 mt-[5px] " onClick={HideSidebar}>
          <a className="bg-black" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 hover:text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </a> 
         
        </li>
        <li className="pr-4 text-red-500 font-[700] italic  sm:block hidden">
          <a href="#">gana</a>
        </li>
        <li className=" sm:block hidden">
          <a href="#" className="">Powered By Avi</a>
        </li>
       
      </ul>
      <ul className="flex">
      <li className="  py-4">
          <input
            type="text"
            className={`rounded-[20px]  bg-slate-200 text-[15px] px-5 pt-2 pb-2  placeholder:pl-[8px] text-black w-full `}
            placeholder="Search Song"
            onChange={sendData}
          />
        </li>
        <li className="  py-4 text-[20px] ">
         
        </li>
      </ul>
      <ul className="flex  px-5 py-4 mt-[5px]  ">
        <li className=" pr-[10px] mt-[5px]  " onClick={handleEvent}>
          {toogleEvent.bgcolor === "white" ? (
            <BsMoonStarsFill />
          ) : (
            <IoSunnyOutline />
          )}
        </li>

        <li className=" sm:block hidden">
          <a href="#">Log In / Sign Up</a>
        </li>
      </ul>
    </div>
  );
}
