import React from 'react';
import { Button, Text } from "@chakra-ui/react";
import pdf from './CV_SEBASTIAN-MENA.pdf';
import { Icon } from "@iconify/react";

export const Job = () => {
  return (
    <section className='h-auto justify-between my-16'>
      <Text className='text-2xl mb-3'>Hola,  soy <span style={{ color: '#FFA500' }}>Sebastian Mena</span></Text>
      <Text className='text-3xl mb-3'>Backend Developer</Text>
      <a download href={pdf}>
        <Button
          variant={"solid"}
          paddingX={'6'}
          bg={'#FFA500'}
          size={"md"}
          rounded={'3xl'}
          color={'#000'}
          _hover={{
            textDecoration: "none",
            bg: '#C21500',
            color: '#FFF'
          }}
        >
          <Icon icon="material-symbols-light:download" width={30} />
          Descargar CV
        </Button>
      </a>
    </section>
  )
}
