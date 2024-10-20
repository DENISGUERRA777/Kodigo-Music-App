
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
      <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route index path='/Kodigo-Music-App/' element={ <Home />} />
            <Route path='/session' element={ <Session />} />
            <Route path='/player' element={ <Player />} />
          </Routes>
      </BrowserRouter>
      </Myprovider>
    </>
  )
}

export default App
