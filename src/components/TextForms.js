import React, {useState} from 'react'

export default function TextForms(props) {
  const [text, settext] = useState('');//search (state hooks) in react website and use {useState} import class.
const handleupclick=()=>{
//console.log("change to uppercase " +text);
let newtext=text.toUpperCase();
settext(newtext);
}
const handleloclick=()=>{
  //console.log("change to lowecase " +text);
  let newtext=text.toLowerCase();
  settext(newtext);
  }
const handleonchange=(event)=>{
 // console.log("on change");
  settext(event.target.value); 
}
const handleclearclick=()=>{
  let newtext=''
  settext(newtext);
}
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  const handleCapitalize = () => {
    let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
    settext(newText);
}
//console.log(text);
  return (
    <>
<div className="container">
  <h1>{props.heading}</h1>
<div className="mb-3">   
<textarea className="form-control" placeholder="Enter Text Here" value={text} onChange={handleonchange} id="mybox" rows="8"></textarea>
</div>
<button className="btn btn-outline-primary mx-1 my-1" onClick={handleupclick}>convert to uppercase</button>
<button className="btn btn-outline-primary mx-1 my-1" onClick={handleloclick}>convert to lowercase</button>
<button className="btn btn-outline-primary mx-1 my-1" onClick={handleclearclick}>clear text</button>
<button className="btn btn-outline-primary mx-1 my-1" onClick={speak}>Speak</button>
<button className="btn btn-outline-primary mx-1 my-1" onClick={handleCapitalize}>Capitalize text</button>
</div>
<div className="container my-3">
  <h2>Your Text Summary</h2>
  <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
  <p>{0.008*text.split(" ").length} minutes read</p>
  <h2>Preview</h2>
  <p>{text}</p>
</div>
</>
  )
}
//(for) refer that only one mybox is in whole website just like id
