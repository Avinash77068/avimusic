import { useContext } from "react"
import { Context } from "../Context/Context"

export default function Footer() {
  let {toogleEvent}:any=useContext(Context);
  return (
    
      <footer className={`bg-${toogleEvent.bgcolor} text-${toogleEvent.color} flex justify-between py-4 fixed w-full bottom-0`}>
          <div className="px-5">@ 2024  Made by Avinash</div>
          <div>
            <ul className='flex px-5'>
              <li className='px-5 hover:text-blue-500 hover:underline '>Terms & Conditions</li>
              <li className='px-5 hover:text-blue-500 hover:underline '>Privacy</li>
              <li className='px-5 hover:text-blue-500 hover:underline '>Contact Us</li>
 
            </ul>
          </div>
      </footer>
    
  )
}
