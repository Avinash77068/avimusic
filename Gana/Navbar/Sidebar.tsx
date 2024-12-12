import { FaMusic } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import { useContext } from 'react'
import { Context } from "../Context/Context";
export default function Sidebar() {
  let {toogleEvent}:any=useContext(Context)
  
  return (
    <div>
        <ul className={`bg-${toogleEvent.bgcolor} z-20   max-w-max px-8 text-${toogleEvent.color} h-[60%] fixed mt-[65px]`}>
          <li className="py-3 px-4 hover:text-red-500 hover:underline flex"><FaMusic className="pt-1 pr-2 text-[25px]"/><a href="#">Hindi Song</a></li>
          <li className="py-3 px-4 hover:text-red-500 hover:underline flex"><FaMusic className="pt-1 pr-2 text-[25px]"/><a href="#">Bhojpuri Song</a></li>
          <li className="py-3 px-4 hover:text-red-500 hover:underline flex"><FaMusic className="pt-1 pr-2 text-[25px]"/><a href="#">Haryanvi Song</a></li>
          <li className="py-3 px-4 hover:text-red-500 hover:underline flex"><FaMusic className="pt-1 pr-2 text-[25px]"/><a href="#">Punjabi Song</a></li>
          <li className="py-3 px-4 hover:text-red-500 hover:underline flex"><FaMusic className="pt-1 pr-2 text-[25px]"/><a href="#">Bhakti Song</a></li>
          <li className="py-3 px-4 hover:text-red-500 hover:underline flex"><CiSettings className="pt-1 pr-2 text-[25px]"/><a href="#">Setting</a></li>
        </ul>
    </div>
  )
}
