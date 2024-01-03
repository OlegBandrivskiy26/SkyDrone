//importing react 
import {useState} from "react"
// importing styles
import './App.css';


// importing components
import BurgerMenu from "./Сomponents/BurgerMenu/BurgerMenu";
import Main from "./Сomponents/Main/Main";

function App() {
  //using hooks
  //This hook are opening and closing burger menu  
  const [burgerIsOpen,setBurgerIsOpen] = useState(false);
  return (
    <div className="wrap">
        {burgerIsOpen 
        ?
          <BurgerMenu setBurgerIsOpen={setBurgerIsOpen}/>
        :
          <Main setBurgerIsOpen={setBurgerIsOpen}/>
        }
        
    </div>
  )
}

export default App;
