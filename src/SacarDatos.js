import React, { useEffect, useState } from 'react';

function Datostabla({ res }) {
  const [animals, setAnimals] = useState([]);
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (res.correo) {
        try {
          const an = await fetch('http://localhost:4500/api/getPets', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: res.correo }),
          });

          if (!an.ok) {
            console.error('No se hizo la consulta');
            return;
          }

          const animalsData = await an.json();
          setAnimals(animalsData);

          const cit = await fetch('http://localhost:4500/api/getCitas', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: res.id_usuario }),
          });

          const citasData = await cit.json();
          setCitas(citasData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchData();
  }, [res]);

  return (
    <div id="cont-usr-anim">
      <h1 style={{ textAlign: 'center' }}>¡Bienvenido {res.nombre_usuario}!</h1>

      <div id="div_pets">
        <h1>Tus mascotas</h1>
        {animals.length > 0 ? (
          animals.map((animal) => (
            <div key={animal.id_animal} className="innercard">
              <h2>{animal.nombre_animal}</h2>
              <div className="primarydata">
                <div className="dataleft">
                  <h3>Animal:</h3>
                  <h3>Raza:</h3>
                  <h3>Edad:</h3>
                  <h3>Peso:</h3>
                  <h3>Sexo:</h3>
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
          ))
        ) : (
          <p>Cargando mascotas...</p>
        )}

        <h1>Tus citas</h1>
        {citas.length > 0 ? (
          citas.map((cita) => {
            const animal = animals.find((an) => an.id_animal === cita.fk_animal);
            return (
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
              </div>
            );
          })
        ) : (
          <p>Cargando citas...</p>
        )}
      </div>
    </div>
  );
}

export default Datostabla;
