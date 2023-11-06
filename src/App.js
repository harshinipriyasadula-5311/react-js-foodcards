import React ,{useEffect,useState} from "react"
import axios from "axios"

   function  Data() {
    const [data, setData]=useState([])
    useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => setData(res.data) )
      .catch(err => console.log(err));
    }, [])
    return(
      <div>
         {
          data.map((user , index) => {

            return <ol key={index}>
                    <li> {user.name}</li>
                   </ol>
        })
      }
      </div>
  

    )}

export default Data





































// import React,{useState} from 'react';
// import './App.css';


// function App() {
//   const [countval,setCount]=useState(0);
//   return (
//     <div className='div1'>
//     <div>
//     <h1>Counter</h1>
//     <h2>{countval}</h2>
//     <button  className="btn"  onClick={()=> setCount(countval + 1)}><b>Increment value</b></button>
//     <button className ="btn"  onClick={()=> setCount(countval - 1)}><b>Decrement value</b></button>
//     </div>
//     </div>
//   );
// }

// export default App;
