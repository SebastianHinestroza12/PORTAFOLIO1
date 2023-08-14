import React from 'react'
import './about.css'
import { Profile } from '../Profile'
import { Button } from "@chakra-ui/react";
import { Link } from '@chakra-ui/react'
import Zoom from 'react-reveal/Zoom';

export const AboutMe = () => {
  return (
    <section className='container-about' id='about'>
      <div className='profile'>
        <Profile/>
      </div>
      <div className='about'>
        <p>Sobre mi</p>
        <Zoom>
          <p>
            Apasionado de la programación y la tecnología, siempre en busca de desafíos. Encuentro motivación en explorar el vasto mundo tecnológico y aprender algo nuevo cada día para mi desarrollo. En mi tiempo libre, compito en línea en el ajedrez ♟️ y me ejercito en el gimnasio 🏋🏿. El fútbol ❤️⚽ también es una forma de desconexión. Mi lema: mantener la positividad ante cualquier obstáculo 💪🏿🙌🏿. Soy proactivo, organizado y busco un puesto que me desafíe, permitiéndome aprender, crecer y acumular experiencia.
          </p>
        </Zoom>
        <Link href='https://api.whatsapp.com/send?phone=573232883290&text=Hola%20Sebastian,%20me%20intereso%20tu%20perfil.' target='_blank'>
          <Button
            variant={"solid"}
            bg={'#FFA500'}
            size={"md"}
            color={'#000'}
          >
            Contactarme
          </Button>
        </Link>
      </div>
    </section>
  )
}
