
import React from 'react'

const TiposBasicos = () => {

    const nombre : string = 'Isaac'
    const edad : number = 35
    const estaActivo : boolean = true

    const lenguajes: string[] = ['JavaScript', 'Java', 'TypeScript', 'React']

  return (
    <>
        <h3>Tipos básicos</h3>
        {nombre}, {edad}, {(estaActivo) ? 'activo' : 'no activo'}
        <br/>
        {lenguajes.join(',')}
    </>
  )
}

export default TiposBasicos