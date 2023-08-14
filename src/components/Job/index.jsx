import React from 'react'
import './job.css'
import { Button } from "@chakra-ui/react";

export const Job = () => {
  const handleDownload = () => {
    const pdfFileName = 'CV-SEBASTIAN-MENA';
    const pdfFilePath = '/src/assets/PDF/CV-SEBASTIAN-MENA.pdf';

    const link = document.createElement('a');
    link.href = pdfFilePath;
    link.target = '_blank';
    link.download = pdfFileName;
    link.click();

    document.body.removeChild(link);
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
