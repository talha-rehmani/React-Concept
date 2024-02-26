// import logo from './logo.svg';
import './App.css';
// import { useState } from "react";
import Students from "./Students";
import Components2 from "./Components2";

function App() {
  // const [data ,setdata]= useState("Rehmani");
 
  return (
   <div className='App'> 
    <Components2 Name = {"azure"} phone = {"123"}/>
   <Students Name = {"Saleem"}/>
  
   
   </div>
  );
}

export default App;
