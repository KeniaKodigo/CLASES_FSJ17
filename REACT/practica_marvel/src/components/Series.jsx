import React, { useEffect, useState } from 'react'

export default function Series() {
    /**
     * componente funcional => hooks (useState, useEffect, useContext)
     * componente clase
     * 
     * useState => maneja los estado
     * useEffect => maneja el ciclo de vida del estado
     * 
     * const []
     */

    const [serie, setSerie] = useState([]);

    console.log(serie); //[]
    
    console.log(serie); //["pokemon","marvel","inuyasha"]

    useEffect(() => {
        setSerie(["pokemon","marvel","inuyasha"])
    })
    return (
        <div>
            {serie.map()}
        </div>
    )
}
