
import Footer from './Footer/Footer'
import Header from './Navbar/Header'
import Sidebar from './Navbar/Sidebar'
import Card from './MainContent/Card'
import { useState } from 'react'
import { useContext } from 'react'
import { Context } from './Context/Context'
import data from './songs/song'
import { Props } from './typescript/type'

export default function TotalSongContent() {
  
  const [isopen,setisopen]=useState(true);
  let {toogleEvent}:any=useContext(Context)

  const [store,setStore]=useState<Props[]>(data);
  const [checkData,setCheckData]=useState("");
  

  return (
    <div className={`bg-${toogleEvent.bgcolor}`}>
       <Header isopen={isopen} setisopen={setisopen} setCheckData={setCheckData}/>
      <div className=' flex'>
      {
        isopen ?   null:<Sidebar/>
      }
     <Card store={store} setstore={setStore} checkData={checkData} setCheckData={setCheckData}/>
      
      
      </div>
      <Footer/>
        
    </div>
  )
}
