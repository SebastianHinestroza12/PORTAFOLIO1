import React from 'react'
import './job.css'
import { Button } from "@chakra-ui/react";
import { saveAs } from 'file-saver';

export const Job = () => {
  const handleDownload = () => {
    saveAs('/src/assets/PDF/CV_SEBASTIAN-MENA (1).pdf', 'CV_SEBASTIAN-MENA');
  };

  return (
    <section className='container-section'>
      <p>Hi, I'm <span>Sebastian Mena</span></p>
      <p>Full Stack Developer</p>
      <Button
        variant={"solid"}
        bgGradient={"linear(to-tr, #C21500, #FFC500)"}
        size={"md"}
        onClick={handleDownload}
      >
        Descargar CV
      </Button>
    </section>
  )
}
