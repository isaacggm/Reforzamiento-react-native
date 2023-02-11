interface Persona {
    nombreCompleto : string
    edad: number
    direccion: Direccion
}
interface Direccion {
    pais: string
    numero: number
    calle: string
}

export const ObjetosLiterals = () => {

    const persona:Persona = {
        nombreCompleto: 'Isaac Gonzalez Morera',
        edad: 35,
            direccion:{
                pais: 'Sabadell',
                numero: 35,
                calle: 'Falsa'
            }
    }
  return (
    <>
        <h3>Objetos Literales</h3>
        <code>
            <pre>
                {JSON.stringify(persona, null, 2)}
            </pre>
        </code>
    </>
  )
}
