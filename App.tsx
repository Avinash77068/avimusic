// import TotalContent from "./UBIQ/TotalContent"
import TotalSongContent from "./Gana/TotalSongContent"
import ContextProvider from "./Gana/Context/Context"


function App() {


  return (
    <ContextProvider>
    <TotalSongContent/>
    </ContextProvider>

  )
}

export default App
