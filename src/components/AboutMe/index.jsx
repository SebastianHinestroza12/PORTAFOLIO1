import React from 'react';
import { Profile } from '../Profile';
import { Button, Link, Box, Text } from "@chakra-ui/react";
import { Zoom } from "react-awesome-reveal";

export const AboutMe = () => {
  return (
    <section className='flex flex-col sm:flex-col lg:flex-row md:flex-row justify-center items-center'>
      <Box>
        <Zoom triggerOnce duration={1500}>
          <Box >
            <Profile />
          </Box>
        </Zoom>
      </Box>

      <Box
        paddingLeft={{ base: 0, sm: 10, md: 10, xl: 20 }}
        marginTop={{ base: 10, sm: 0, md: 0, lg: 0, xl: 0 }}
      >
        <Text
          fontSize={'2xl'}
          marginBottom={2}
          fontWeight={'bold'}
        >
          Sobre mí
        </Text>
        <Text marginBottom={3}>
          Apasionado del desarrollo de software y la tecnología, me caracterizo por mi constante búsqueda de desafíos y mi compromiso con el crecimiento profesional. Encuentro motivación en explorar el vasto panorama tecnológico, siempre en busca de nuevos conocimientos para enriquecer mi trayectoria. En mi tiempo libre, me dedico a competir en línea en el ajedrez, un juego que estimula mi capacidad estratégica, y a ejercitarme en el gimnasio para mantener un equilibrio entre mente y cuerpo. El fútbol también forma parte de mis actividades recreativas, brindándome momentos de desconexión y diversión.
        </Text>
        <Box>
          <Link href='https://api.whatsapp.com/send?phone=573232883290&text=Hola%20Sebastian,%20me%20intereso%20tu%20perfil.' target='_blank'>
            <Button
              variant={"ghost"}
              bg={'#FFA500'}
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
