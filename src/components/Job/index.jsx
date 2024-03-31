import React from 'react';
import { Button, Text } from "@chakra-ui/react";
import pdf from './CV_SEBASTIAN-MENA.pdf';

export const Job = () => {
  return (
    <section className='h-auto justify-between my-16'>
      <Text className='text-2xl text-white mb-3'>Hola,  soy <span style={{ color: '#FFC500' }}>Sebastian Mena</span></Text>
      <Text className='text-4xl text-white mb-3'>Backend Developer</Text>
      <a download href={pdf}>
        <Button
          variant={"solid"}
          bg={'#FFC500'}
          size={"md"}
          rounded={'3xl'}
          color={'#000'}
          _hover={{
            textDecoration: "none",
            bg: '#C21500',
            color: '#FFF'
          }}
        >
          Descargar CV
        </Button>
      </a>
    </section>
  )
}
