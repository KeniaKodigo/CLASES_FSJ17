import React from 'react'

//asignando las variables que se pusieron en ListaPokes
export default function CardPokemon({
    id,
    name,
    specie, 
    image, 
    height, 
    weight, 
    stats, 
    type  
}){
        return (
            <div>
                <div className='contenedor-img'>
                    <h2>{name}</h2>
                    <img src={image} alt={name} />
                </div>
                <table className='table'>
                    <tr>
                        <td className='title'>Id</td>
                        <td>{id}</td>
                    </tr>
                    <tr>
                        <td className='title'>Specie</td>
                        <td>{specie}</td>
                    </tr>
                    <tr>
                        <td className='title'>Height</td>
                        <td>{height} cm</td>
                    </tr>
                    <tr>
                        <td className='title'>Weight</td>
                        <td>{weight} lbs</td>
                    </tr>
                    <tr>
                        <td className='title'>Stats</td>
                        <td>{stats}</td>
                    </tr>
                    <tr>
                        <td className='title'>Type</td>
                        <td>{type}</td>
                    </tr>
                </table>
            </div>
        )
}
