import React from 'react'
import './job.css'
import { Button} from "@chakra-ui/react";

export const Job = () => {
  return (
    <section className='container-section'>
      <p>Hi, I'm <span>Sebastian Mena</span></p>
      <p>Full Stack Developer</p>
      <Button
        variant={"solid"}
        bgGradient={"linear(to-tr, #C21500, #FFC500)"}
        size={"md"}
      >
        Descargar CV
      </Button>
    </section>
  )
}
