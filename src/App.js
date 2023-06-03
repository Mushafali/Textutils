import "./App.css";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";
import React,{useState} from 'react'
function App() {
   const [mystyle1,setmystyle1]=useState('light')
  const  togglemode=()=>{
if(mystyle1==='light'){
setmystyle1("dark");
document.body.style.backgroundColor='black'
document.body.style.color='white'

}
else{ 
  setmystyle1("light")
  document.body.style.backgroundColor='white'
document.body.style.color='black'
}
   }
  return (
    <>
      <Navbar title="TextUtils" about="About" mystyle1={mystyle1} togglemode={togglemode}/>
      <div className="container my-3">
        <TextForms heading="Enter the text to analyze below"/>
      </div>
    </>
  );
}
export default App;