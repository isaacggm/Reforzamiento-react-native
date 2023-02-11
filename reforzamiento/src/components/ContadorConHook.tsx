import React from 'react'
import {useState} from 'react'
import { useCounter } from '../hooks/useCounter';

export const ContadorConHook = () => {

    const {valor, acumular} = useCounter(0)
    
  return (
    <>
        <h3>Contador Con Hook <small>{valor}</small></h3>
        <button
            className='btn btn-primary'
            onClick={()=>acumular(1)}
        >
            +1
        </button>
        <button
            className='btn btn-danger'
            onClick={()=>acumular(-1)}
        >
            -1
        </button>
    </>
  )
}
