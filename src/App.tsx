import * as reactRouterDom from 'react-router-dom'
import './App.css'
import { MainPage } from './pages/main'
import { Room } from './pages/room'
import { SignIn } from './pages/sign-in'

function App() {

  return (
    <reactRouterDom.BrowserRouter>    
      <reactRouterDom.Routes>
        <reactRouterDom.Route path = '/' element={<MainPage/>}/>
        <reactRouterDom.Route path = '/sign-in' element={<SignIn/>}/>
        <reactRouterDom.Route path = '/Room' element={<Room/>}/>
      </reactRouterDom.Routes>
    </reactRouterDom.BrowserRouter>
  )
}

export default App
