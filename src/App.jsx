import './App.css'
import { Navbar } from './components/Navbar';
import { Job } from './components/Job';
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';
import { Tecnologies } from './components/Tecnologies'
import {backendData, frontendData, toolData } from './components/Tecnologies/data'
import { Contact } from './components/Contact';


function App() {
  return (
    <>
      <div className='section-margin container-main'>
        <Navbar />
        <Job />
        <AboutMe />
      </div>
      <div className='section-margin' id='projects'>
        <div className='projects'>
          <p>proyectos</p>
        </div>
        <Projects
          numberProject={1}
          title={'Ecommerce Qatar 2022'}
          image={'https://res.cloudinary.com/dafsjo7al/image/upload/v1691604917/ecommerce_bunmxh.png'}
          description={'¡Descubre la emoción del Mundial de Qatar 2022 a través de nuestro eCommerce colaborativo! Te presentamos una selección excepcional de productos temáticos del torneo, cuidadosamente elegidos y diseñados por nuestro apasionado equipo de ocho aficionados al fútbol. Desde camisetas oficiales hasta artículos coleccionables, te invitamos a explorar y ser parte de esta experiencia única que celebra la pasión y la magia del fútbol en Qatar 2022. ¡Únete a nosotros en este emocionante viaje futbolístico y encuentra productos que harán que vivas el Mundial al máximo!'}
          alt={'Projects1'}
          href={'https://eccomerceqatareshop.vercel.app/'}
        /> 
        <Projects
          numberProject={2}
          title={'movie mobile app'}
          image={'https://res.cloudinary.com/dafsjo7al/image/upload/v1691618520/Group_1_rt7lxt.png'}
          description={'Explora el apasionante universo cinematográfico con nuestra app de películas móvil. Descubre los últimos estrenos, explora detalles sobre actores y presupuestos, y sumérgete en el detrás de escena de tus películas favoritas. ¡Toda la magia del cine en la palma de tu mano!'}
          alt={'Projects2'}
          apkUrl
          invertContent
        />
        <Projects
          numberProject={3}
          title={'task application'}
          image={'https://res.cloudinary.com/dafsjo7al/image/upload/v1691623708/task2_rmoujm.png'}
          description={'Optimiza tu productividad con nuestra intuitiva aplicación de tareas. Simplifica tu día a día al agregar, completar y eliminar tareas con facilidad. Mantén un control total sobre tus responsabilidades y logra más en menos tiempo.'}
          alt={'Projects3'}
          href={'https://aplicationtask.netlify.app'}
        /> 
      </div>
      <div className='tecnologies section-margin' id='technologies'>
        <p className='tecnologie-text'>Tecnologías</p>
        <div className='container-tecnologies'>
          <Tecnologies tecnologies={backendData} title={'backend'} />
          <Tecnologies tecnologies={toolData} title={'tools'} />
          <Tecnologies tecnologies={frontendData} title={'frontend'} />
        </div>
      </div>

      <div id='contact'>
        <Contact/>
      </div>
    </>
  )
}

export default App
