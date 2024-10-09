
/*import React, {useState} from 'react';
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';*/

import './Post.css'; 
import React from 'react';
import { useEffect, useState } from 'react';


//Sacar los datos para llenar las citas y animales
function Post(res) {
  const [animals, setAnimals] = useState([]);
  const [citas, setCitas] = useState([]);
  const usr= res.res.correo;
  //const usuario=JSON.parse(usr);

  useEffect(() => {
    const fetchData = async () => {
      //console.log(usr);
      if (usr) {
        fetch("http://localhost:4501/api/getPets?email="+usr)
        .then((response)=>response.json())
        .then((data)=>{
          console.log(data);
          setAnimals(data);
        })

        fetch("http://localhost:4501/api/getCitas?id="+res.res.id_usuario)
        .then((ans)=>ans.json())
        .then((answer)=>{
          console.log(answer);
          setCitas(answer);
        })
      }
    };

    fetchData();
  }, [res]);

  return (
    <div id="cont-usr-anim">
      <h1 className='h1s'style={{ textAlign: 'center' }}>¡Bienvenido {res.res.nombre_usuario}!</h1>

      <div id="div_pets" className='pets'>
        <h1 >Tus mascotas</h1>
        {animals.length > 0 ? (
          animals.map((animal) => (
            <div class="card" id='card'>
              <h2 className='h2s'>{animal.nombre_animal}</h2>
            <div key={animal.id_animal} className="innercard">
              
              <div className="primarydata">
                <div className="dataleft">
                  <h3 className='h3s'>Animal:</h3>
                  <h3 className='h3s'>Raza:</h3>
                  <h3 className='h3s'>Edad:</h3>
                  <h3 className='h3s'>Peso:</h3>
                  <h3 className='h3s'>Sexo:</h3>
                </div>
                <div className="dataright">
                  <p>{animal.especie_a}</p>
                  <p>{animal.raza_a}</p>
                  <p>{animal.edad}</p>
                  <p>{animal.peso_a}</p>
                  <p>{animal.sexo_a}</p>
                </div>
              </div>
              <div className="descdata">
                <h3>Informacion adicional</h3>
                <p>{animal.info_adicional_a}</p>
                <button
                  className="btn"
                  onClick={() =>
                    (window.location.href = `/his?id=${animal.id_animal}`)
                  }
                >
                  Historial médico
                </button>
              </div>
            </div>
            </div>
          ))
        ) : (
          <p>Cargando mascotas...</p>
        )}

        <h1 className='h1s'>Tus citas</h1>
        {citas.length > 0 ? (
          citas.map((cita) => {
            const animal = animals.find((an) => an.id_animal === cita.fk_animal);
            return (
              <div class="card" id='citas_card'>
              <div key={cita.id_cita} className="innercard">
                <div className="primarydata" style={{ flexDirection: 'column', height: 'auto' }}>
                  <h3 style={{ color: '#004E71' }}>Mascota:</h3>
                  <p>{animal?.nombre_animal}</p>
                  <h3 style={{ color: '#004E71' }}>Fecha:</h3>
                  <p>{cita.fecha}</p>
                  <h3 style={{ color: '#004E71' }}>Hora:</h3>
                  <p>{cita.hora}</p>
                </div>
                <div className="descdata">
                  <h3 style={{ color: '#004E71' }}>Motivo:</h3>
                  <p>{cita.motivo_cita}</p>
                </div>
              </div></div>
            );
          })
        ) : (
          <p>Cargando citas...</p>
        )}
      </div>
    </div>
  );
}


export default Post;