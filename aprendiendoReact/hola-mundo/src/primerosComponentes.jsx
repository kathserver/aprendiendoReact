/*

    ESTUDIENTE: KATHERYNE MEZA
    FECHA:      27/02/2024
    LINK VIDEO: https://youtu.be/7iobxzd_2wY?si=csCgPamdQkic13lM
    MINUTOS:    1:00 - 59:35

    CLASE 1 DE REACT DESDE 0
    En este archivo se presentan los conceptos básicos de la clase 1

    UTILIZANDO: 
        -FUNCIONES DE FLECHA
        -CONVENCIONES  DE NOMBRAMIENTO EN JSX (HTML PARA REACT)
        -INICIALIZACION DE COMPONENTES EN REACT
*/

// importsacion de librerias de react para manejo del DOM y para el manejo de componentes
import React from 'react'
import ReactDOM from 'react-dom/client'


const root = ReactDOM.createRoot(document.getElementById('root'))

// Variable de componente para poder utilizar en  la renderizacion 
// componente de BOTON con imagen de me gusta
const SpecialButton =({texto})=>{
  return (
    <button>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
        </svg>
       {texto}
      </button>
  )
}

// Los componentes de React siempre deben de ser en PascalCase

//tipos de nombamiento O convenciones mas comunes de variables son:
// PascalCase CamelCase snake_case kebab-case


//deben ser declarativo y no imperativo

//ej: imperativo
// {Button({texto: 'Button 1'})}
// {Button({texto: 'Button 2'})}
// {Button({texto: 'Button 3'})}

// declarativo
// <SpecialButton  texto="Button 1"/> 

// dibujando el  arbol virtual de los componentes
root.render(
  <React.Fragment>
    
    <SpecialButton  texto="Button 1"/>
    <SpecialButton  texto="Button 2"/>
    <SpecialButton  texto="Button 3"/>
  </React.Fragment>
)