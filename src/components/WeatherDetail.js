import React, {useState, useEffect} from 'react';
import axios from 'axios';
const WeatherList = () => {

    const [cities, setCities] = useState([]);

    useEffect(() => {
        const obtenerClima = async () => {
          try {
            const url = 'https://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=7bf9ec5f7bc868aa81b63ff00b8f0ff7';
            const resultado = await axios.get(url);
            const result = resultado.data.list.map(item=>{
                return{
                  ...item,
                  pressure:item.main.pressure,
                  temp:item.main.temp
              }})
            setCities(result);
    
            console.log(result);
          } catch (error) {
            console.log(error.response);
          }
        }
        obtenerClima();
      }, []);

      const addFavorite=(name, id)=>{
        const favoritos = localStorage.getItem('favorite');
        const favoritosStorage = JSON.parse(favoritos);

        //Buscamos en localstorage item q no sea repetido, 
        //si es repetido no se agrega
        if (favoritosStorage) {
          for (let i = 0; i < favoritosStorage.length; i++) {
            if (favoritosStorage[i].id === id) {
              alert("Ciudad ya ingresada, seleccione otra!!!");
              return;
            }
        }}
        
        //Llenamos nuestro array del localstorage con cada 
        //item q se agrega manualmente
        favoritosStorage.push({
          name:name,
          id:id
        });

        //Actualizamos nuestro localstorage con información de favoritos nueva
        localStorage.setItem('favorite', JSON.stringify(favoritosStorage));
        alert('Ciudad agregada a Favoritos!!!');
      }

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
        <div className='mt-4'>
          <div className='row'>
            <input id="searchTerm"
               type="text"
               autoComplete='off'
               className='form-control'
               placeholder='Ingrese su búsqueda...' 
               onKeyUp={search} />
          </div>
            <table className="table" id='regTable'>
            <thead>
                <tr>
                <th scope="col">Ciudad</th>
                <th scope="col">Temperatura</th>
                <th scope="col">Presión</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {
                  cities.map(x=>{
                    return(
                      <tr>
                        <td key={x=>x.id}>{x.name}</td>
                        <td key={x=>x.id}>{x.temp}</td>
                        <td key={x=>x.id}>{x.pressure}</td>                        
                        <td>
                          <button className='btn btn-success' onClick={()=>addFavorite(x.name, x.id)}>Favoritos</button>
                        </td>
                      </tr>
                    )
                })}
            </tbody>
            </table>
        </div>
    )
}

export default WeatherList;