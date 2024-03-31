import React from 'react'
import { Profile } from '../Profile'
import { Button, Link, Box, Text } from "@chakra-ui/react";
import { Zoom } from "react-awesome-reveal";

export const AboutMe = () => {
  return (
    <section className='flex flex-col sm:flex-col lg:flex-row md:flex-row justify-center items-center' id='about'>
      <Box>
        <Zoom className='sm:flex' triggerOnce duration={1500}>
          <Box className=''>
            <Profile />
          </Box>
        </Zoom>
      </Box>

      <Box className='sm:pl-0 mt-6 md:pl-10 lg:pl-10'>
        <Text className='text-center text-white text-3xl mb-2 sm:text-center md:text-start lg:text-start xl:text-start'>Sobre mí</Text>
        <Text className='mb-2 text-white'>
          Apasionado de la programación y la tecnología, siempre en busca de desafíos.
          Encuentro motivación en explorar el vasto mundo tecnológico y aprender algo nuevo cada día para mi desarrollo. En mi tiempo libre, compito en línea en el ajedrez ♟️ y me ejercito en el gimnasio 🏋🏿. El fútbol ❤️⚽ también es una forma de desconexión. Mi lema: mantener la positividad ante cualquier obstáculo 💪🏿🙌🏿. Soy proactivo, organizado y busco un puesto que me desafíe, permitiéndome aprender, crecer y acumular experiencia.
        </Text>
        <Box className=''>
          <Link href='https://api.whatsapp.com/send?phone=573232883290&text=Hola%20Sebastian,%20me%20intereso%20tu%20perfil.' target='_blank'>
            <Button
              variant={"outline"}
              bg={'#FFC500'}
              rounded={'3xl'}
              color={'#000'}
              _hover={{
                textDecoration: "none",
                bg: '#C21500',
                color: '#FFF'
              }}
            >
              Contactarme
            </Button>
          </Link>
        </Box>
      </Box>
    </section>
  )
}
