
import './App.css';
import Profile from "./profile/Profile";
import IMG from "./me.jpg"
function App () {
  const styleObject ={color :"red"}
  const handleName = name => alert(name);
  return(
    <div style ={styleObject}>
    <Profile  handleName={handleName} bio="SQDQ" profession="Dspld">{IMG}</Profile>
    
    </div>
  
  )
 


  
 };
 export default App;