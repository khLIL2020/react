
import './App.css';
import React from "react";
import Photo from "./Component/Profile/ProfilePhoto";
import Adress from "./Component/Profile/Address";
import FullName from "./Component/Profile/FullName";

const App = () => (
  <div class ="all">
    
  <div class ="photo">
    <Photo/>
  </div>
  <div class ="FullName">
   Full name:<FullName/>
 </div>
 
  <div class ="Adress">
   Adress:<Adress/>
 </div>
  </div>

  
 );
 export default App;