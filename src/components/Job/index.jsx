import React from 'react'
import './job.css'
import { Button } from "@chakra-ui/react";

export const Job = () => {
  const handleDownload = () => {
    const filePath = '/src/assets/PDF/CV_SEBASTIAN-MENA (1).pdf';
    window.open(filePath, '_blank');
  };

  return (
    <section className='container-section'>
      <p>Hola,  soy <span>Sebastian Mena</span></p>
      <p>Full Stack Developer</p>
      <Button
        variant={"solid"}
        bg={'#FFA500'}
        size={"md"}
        color={'#000'}
        onClick={handleDownload}
      >
        Descargar CV
      </Button>
    </section>
  )
}
