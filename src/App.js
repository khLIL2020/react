
import './App.css';
import IMG from "./me.jpg"
import React from "react";

class App extends React.Component {
 state = {
  fullName:"Khalil BEN ZINA", bio: "my name is Khalil", imgSrc: IMG,profession:"bataal",show: false
      };
 render() {
  
  

  
  return( 
    <div>
      {(this.state.show) ?(
         <div>
         <h1>{this.state.fullName}</h1>
           <img src={this.state.imgSrc}/>
           <h1>{this.state.bio}</h1>
           <h1>{this.state.profession}</h1>
         </div>
      ) :("")}
   

  <button onClick={()=>this.setState({show : !this.state.show})}>
  Activer les lasers
</button>

   </div>

  )
 }

  }

export default App;