import React, { useEffect, useState } from 'react'
import CardPokemon from './CardPokemon';

export default function ListaPokes() {
    //declarando un estado para el arreglo de pokemones
    const [pokemones, setPokemones] = useState([]);

    //metodo para llamar a la api pokemon
    const getPokemones = async () => {
        //estamos solicitando una peticion asincrona por medio de fetch para que nos devuelva una promesa
        const resultado = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0");
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
                //ordenamos el arreglo
                await pokemones.sort((a, b) => {
                    return (a.id < b.id)
                });
                
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

        <div className='row'>
            {
                pokemones.map((pokemon, indice) => (
                        <div className='col-md-4'>
                        {/* mandando la informacion del pokemon en otro componente */}

                        <CardPokemon 
                            key = {indice}
                            id = {pokemon.id}
                            name = {pokemon.name}
                            specie = {pokemon.species.name}
                            image = {pokemon.sprites.other["official-artwork"].front_default}
                            height = {pokemon.height}
                            weight = {pokemon.weight}
                            stats = {pokemon.stats[0].base_stat}
                            type = {pokemon.types[0].type.name}
                        />
                    </div>
                    
                        /*<div key={indice}>
                            <h1>{pokemon.name}</h1>
                            <p>Id: {pokemon.id}</p>
                            <p>Specie: {pokemon.species.name}</p>
                            <p>Stats: {pokemon.stats[0].base_stat}</p>
                            {
                                pokemon.stats.map((elemento) => {
                                    return (
                                        <p>{elemento.base_stat}</p>
                                    )
                                })
                            }
                        </div>*/
                    
                ))
            }
        </div>
    )
}






