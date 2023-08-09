import React from 'react'
import './about.css'
import { Profile } from '../Profile'
import { Button } from "@chakra-ui/react";

export const AboutMe = () => {
  return (
    <section className='container-about'>
      <div className='profile'>
        <Profile/>
      </div>
      <div className='about'>
        <p>About Me</p>
        <p>Soy un apasionado de la programación y la tecnología. Me encanta ponerme a prueba cada día con los retos que me encuentro. Me motiva mucho el saber que este mundo de la tecnologia es tan inmenso, en especial poder aprender cada dia algo nuevo que aporte en mi evolucion. En mis tiempos libres me gusta jugar Ajedrez♟️, poder enfrentarme en linea a diferentes jugadores de todo el mundo, al mismo tiempo que estimulo mi capacidad de analisis e imaginacion. Me gusta ir al Gimnasio🏋🏿 a ejercitarme y relajarme un poco y por ultimo jugar al Futbol❤️⚽. Esto me ayuda a desconectarme de mis actividades diarias, relajarme y dedicarme tiempo a mi mismo.
          Mi lema es estar siempre POSITIVO sin importar las adversidades que la vida ponga en el camino💪🏿🙌🏿.
          Soy una persona proactiva, excelente compañero de equipo, organizado y responsable. Disfruto mucho aprender cosas nuevas, por lo que mi objetivo es un puesto desafiante y dinámico donde pueda adquirir nuevos conocimientos, desarrolar mis habilidades y adquirir experiencia laboral.
        </p>
        <Button
          variant={"solid"}
          bgGradient={"linear(to-tr, #C21500, #FFC500)"}
          size={"md"}
        >
          Contactarme
        </Button>
      </div>
    </section>
  )
}
