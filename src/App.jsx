
import './App.css'
import { Myprovider } from './assets/context/UserContext'
import  {Home}  from './pages/home/Home'
import {Player} from './pages/home/Player'
import { Session } from './pages/session/Session'
import {BrowserRouter,Route,Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <Myprovider>
      <BrowserRouter >
          <Routes>
            <Route index path='/Kodigo-Music-App/' element={ <Home />} />
            <Route path='/Kodigo-Music-App/session' element={ <Session />} />
            <Route path='/Kodigo-Music-App/player' element={ <Player />} />
          </Routes>
      </BrowserRouter>
      </Myprovider>
    </>
  )
}

export default App
