import React from 'react'
import { useState } from 'react'

export default function Practice() {
  const [name,setName] = useState('');
  const [email, setEmail] = useState('');
  const [errorName, setErrorName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');

  const[text, setText] = useState ('hello');

  const uppercase=()=>{
    let result= text.toUpperCase();
    console.log(result)
    setText(result);
  }

  const lowercase =()=>{
    let result=text.toLowerCase();
    setText(result)
  }



const handleSubmit=(e)=>{
  e.preventDefault();

if(!name){
  setErrorName('Enter Name')
}else{
  setErrorName('')
}

if(!email){
  setErrorEmail('Enter Email')
}else if(!/\S+@\S+\.\S+/.test(email)){
  setErrorEmail('enter valid email')
}else{
  setErrorEmail('')
}


}


  return (
    <div style={{marginTop:'100px',marginBottom:'100px'}}>
      <form onSubmit={handleSubmit}>
        <label>Name: <input type="text" onChange={(e)=>setName(e.target.value)} />{errorName && <span>{errorName}</span>}</label><br /><br />
        <label>Email: <input type="text" onChange={(e)=> setEmail(e.target.value)} />{errorEmail && <span>{errorEmail}</span>}</label><br /><br />
        <button type='submit'>Submit</button>
      </form>
      <br /><br /><br />



     
        <textarea rows="10" cols="100" value={text}  onChange={(e)=>setText(e.target.value)} />
        <button onClick={uppercase}>Click to upper case</button>
        <button onClick={lowercase} >Click to lowercase</button>

        <h3>{text.length}</h3>
        <h3>{text.slice(" ")}</h3>
      
    </div>
  )
}
