import React from 'react';
import { useState,useEffect } from 'react';

export default function GithubApi() {
    const[data, setData] = useState([]);


//using aync await function

// useEffect(()=>{
//     async function response(){
//         const res = await fetch('https://api.github.com/users');
//         let data = await res.json();
//         setData(data);
//     }try{
//         response();
//     }catch (error){
//         console.log(error);
//     }    
// },[])


// using passing promises using .then method

useEffect(()=>{
fetch('https://api.github.com/users')
.then(res=>res.json())
.then(data=>setData(data))
.catch((error)=>console.log(error));

},[])


  return (
    <div>
      <ul>
        {data.map((items=>
        <li key={items.id}>{items.login}</li>
        ))}
        
      </ul>
    </div>
  )
}
