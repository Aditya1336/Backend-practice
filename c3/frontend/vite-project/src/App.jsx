import { useState } from "react";
import axios from 'axios';
import { useEffect } from "react";

function App(){

  const [jokes,setJokes] = useState([]);

  useEffect(()=>{
    const data = axios.get('/api/jokes')
    .then((response)=>{setJokes(response.data)})
    .catch((err)=>{console.log(err)});
  }
  ,[])

  return(
    <>
      <h2>Data</h2>
      <p>Jokes: {jokes.length}</p>
      <ul>
        {jokes.map((joke,index)=>{
          return(
            <li key={index}>{joke.content}</li>
          )
        })}
      </ul>
    </>
  )
}

export default App;