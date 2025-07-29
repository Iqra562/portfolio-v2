import './App.css'
import BackgroundImage from './components/BackgroundImage'
import ProfileLeftSection from './components/ProfileLeftSection'
import {Introduction} from './components/LandingPage/Introduction'
import Layout from './Layout'
import { CenterContent } from './Pages/CenterContent'
// import Introduction from './components';

function App() {
 
  return (
  <div className='w-full h-screen flex'>
    <BackgroundImage/>
   
  
    <Layout/>

  </div>
  )
}

export default App
