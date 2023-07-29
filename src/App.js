import "./css/styles.css"
import "./css/bootstrap.css"
import Header from './Components/Header/Header'
import Footer from "./Components/Footer/Footer"
import First from "./Components/MainSection/FirstSection/First"
import Second from "./Components/MainSection/SecondSection/Second"
import Third from "./Components/MainSection/ThirdSection/Third"
import Fourth from "./Components/MainSection/FourthSection/Fourth"
import Fivth from "./Components/MainSection/FivthSection/Fivth"
import Sith from "./Components/MainSection/SithSection/Sith"

function App() {
  return (
    <div>
     <Header/>
     <First />
     <Second />
     <Third />
     <Fourth />
     <Fivth />
     <Sith />
     <Footer/>

     

    </div>
  )
}

export default App