import { useState, useEffect, Component } from "react";


const Component=() => {
    const [value, setValue] = useState(false)

    useEffect(()=>{
        // como minimo se ejecua 1 vez
        console.log('El codigo a ejecutar')
    }, listOfDependencies// este parametro es opcional, si no lo tiene se ejecuta lo primero cada vez que se renderice
    )
}