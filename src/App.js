import './App.css';
import Footer from './Footer'; 
import { useEffect, useState } from 'react';
import Header from './Post' ;

function App() {
  const [usr,setUsr]=useState([]);
  function getUsr(){
    fetch("http://localhost:4500/api/getUsrData?nombre=hola@hola.com")
    .then((response)=> response.json())
    .then((data)=>{
      setUsr(data);
      //console.log(usr)
    })
  }
  /*async function getUsrAs(){
    const res=await fetch("http://localhost:4500/api/getUsrData?nombre=hola@hola.com");
    const data=await res.json();
    setUsr(data);
  }*/
  useEffect(()=>{
    getUsr();
    //console.log(usr);
  },[])
  return (
    <div>
      <header >
        <Header />
      </header>
      <body>
        <h1>lala</h1>
        <ul>
          <li key={usr.id_usuario}>
            {usr.nombre_usuario} - {usr.correo}
          </li>
        </ul>
      </body>
      <Footer />
    </div>
  );
}

export default App;
