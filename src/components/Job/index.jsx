import React from 'react'
import './job.css'
import { Button } from "@chakra-ui/react";
import pdf from './CV-SEBASTIAN-MENA.pdf'

export const Job = () => {
  return (
    <section className='container-section'>
      <p>Hola,  soy <span>Sebastian Mena</span></p>
      <p>Full Stack Developer</p>
      <a download href={pdf}>
        <Button
          variant={"solid"}
          bg={'#FFA500'}
          size={"md"}
          color={'#000'}
        >
          Descargar CV
        </Button>
      </a>
    </section>
  )
}
