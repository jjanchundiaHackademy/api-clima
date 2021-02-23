import React, {useState, useEffect} from 'react';

const FavoritesList = () => {
    const [cities, setCities] = useState([]);
    const [consulta, setConsulta] = useState(true);

    useEffect(() => {
        const obtenerClima = async () => {
          try {
            //Consultamos los favoritos q se agregó desde otra pantalla
            const favoritos = localStorage.getItem('favorite');
            //Lenamos nuestro state con los favoritos del localstorage
            setCities(JSON.parse(favoritos));
            setConsulta(false);
          } catch (error) {
            console.log(error.response);
          }
        }
        obtenerClima();
      }, [consulta]);

      const removeFavorite=(id)=>{
        //Busqueda para eliminar item por medio del id
        for (let i =0; i < cities.length; i++){
            if (cities[i].id === id) {
                cities.splice(i,1);
            }
         }
        
         //Actualizamos localstorage
        localStorage.setItem('favorite', JSON.stringify(cities));
        alert('Ciudad eliminada de favoritos correctamente');
        setConsulta(true);
      }

      //Búsqueda de items en la tabla
      const search=()=> {
        var tableReg = document.getElementById('regTable');
        var searchText = document.getElementById('searchTerm').value.toLowerCase();
        for (var i = 1; i < tableReg.rows.length; i++) {
            var cellsOfRow = tableReg.rows[i].getElementsByTagName('td');
            var found = false;
            for (var j = 0; j < cellsOfRow.length && !found; j++) {
                var compareWith = cellsOfRow[j].innerHTML.toLowerCase();
                if (searchText.length == 0 || (compareWith.indexOf(searchText) > -1)) {
                    found = true;
                }
            }
            if (found) {
                tableReg.rows[i].style.display = '';
            } else {
                tableReg.rows[i].style.display = 'none';
            }
        }
    }

    return (
        <div>
          <div className='row'>
            <input id="searchTerm"
               type="text"
               autoComplete='off'
               className='form-control'
               placeholder='Ingrese su búsqueda...' 
               onKeyUp={search} />
          </div>
          <div className='row'>
            <table className="table" id='regTable'>
            <thead>
                <tr>
                {/* <th scope="col">#</th> */}
                <th scope="col">Ciudad</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {
                  cities !== null ? cities.map(x=>{
                    return(
                      <tr>
                        <td key={x=>x.id}>{x.name}</td>
                        <td>
                          <button className='btn btn-danger' onClick={()=>removeFavorite(x.id)}>Eliminar</button>
                        </td>
                      </tr>
                    )
                }): null}
            </tbody>
            </table>
            </div>
        </div>)
}

export default FavoritesList;