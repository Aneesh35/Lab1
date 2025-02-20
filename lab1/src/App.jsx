import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('')
  function TextMe(e){
    setText(e.target.value);
  }
  return (
    <>
      <input onChange={(e)=>{
        TextMe(e);
      }} placeholder='enter your text here' className='p-4 rounded-md'/>
      <br />
      <br />
      <div className='p-10 bg-slate-100 h-auto w-auto rounded-sm  text-black'>Text contents are:<br/>{text}</div>
      <br />
      <br />
      <div className='p-10 bg-slate-100 h-auto w-auto rounded-sm  text-black'>Text characters:<br/>{text.length}</div>
    </>
  )
}

export default App
