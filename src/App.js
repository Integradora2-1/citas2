import './App.css';
import Footer from './Footer'; 
import { useEffect, useState } from 'react';
import Header from './Header';
import Post from './Post';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [usr,setUsr]=useState([]);
  function getUsr(){
    fetch("http://localhost:4501/api/getUsrData?nombre=hola@hola.com")
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
  //console.log(usr);
  return (
    <div>
      
        <Header />
      
      <body>
        <Post res={usr}></Post>
      </body>
      <Footer />
    </div>
  );
}


export default App;
