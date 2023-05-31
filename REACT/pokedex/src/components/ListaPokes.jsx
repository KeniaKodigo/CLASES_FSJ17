import React, { useEffect, useState } from 'react'

export default function ListaPokes() {
    //declarando un estado para el arreglo de pokemones
    const [pokemones, setPokemones] = useState([]);

    //metodo para llamar a la api pokemon
    const getPokemones = async () => {
        //estamos solicitando una peticion asincrona por medio de fetch para que nos devuelva una promesa
        const resultado = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
        //convertimos la promesa en un json
        const datos = await resultado.json();

        //creando un metodo para obtener la informacion de cada pokemon por su nombre
        function caracteristicasPokemon(resultado){ //[]
            resultado.forEach(async (pokemon) => {
                const respoke = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);

                const datopoke = await respoke.json();
                //console.log(datopoke);
                //actualizando el estado

                //... indica una copia de un arreglo
                setPokemones((listaActual) => [...listaActual, datopoke]);
            });
        }

        //llamando a la funcion de cada pokemon
        caracteristicasPokemon(datos.results);
        //console.log(datos.results);
    }

    //useEffect => un gancho de efectos (montar el estado, actualizarlo y desmontarlo)

    //primer parametro: ayuda a montar el estado o al metodo para renderizarlo
    //segundo parametro: [] eso siginifica que lo va renderizar una vez
    useEffect(() => {
        getPokemones();
    }, [])

    console.log(pokemones); //[]
    return (
        <div>ListaPokes</div>
    )
}






