import './App.css'
import { Navbar } from './components/Navbar';
import { Job } from './components/Job';
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Tecnologies } from './components/Tecnologies'
import {backendData, frontendData, toolData } from './components/Tecnologies/data'
import { Contact } from './components/Contact';

function App() {
  return (
    <>
      <div className='section-margin'>
        <Navbar />
        <Job />
        <AboutMe />
      </div>
      <div className='section-margin' id='projects'>
        <div className='projects'>
          <p>projects</p>
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
          title={'Dog application'}
          image={'https://res.cloudinary.com/dafsjo7al/image/upload/v1691623708/dog_bhjuoz.png'}
          description={'Explora, personaliza y ordena perros en nuestra app canina. Encuentra la raza perfecta con filtros detallados o crea tu compañero ideal. ¡Lleva la experiencia de tener un perro a tu pantalla!'}
          alt={'Projects3'}
          href={'https://pi-dog-main.vercel.app'}
        />
        <Projects
          numberProject={4}
          title={'task application'}
          image={'https://res.cloudinary.com/dafsjo7al/image/upload/v1691623708/task2_rmoujm.png'}
          description={'Optimiza tu productividad con nuestra intuitiva aplicación de tareas. Simplifica tu día a día al agregar, completar y eliminar tareas con facilidad. Mantén un control total sobre tus responsabilidades y logra más en menos tiempo.'}
          alt={'Projects4'}
          href={'https://aplicationtask.netlify.app'}
          invertContent
        /> 
      </div>
      <div className='container-services section-margin' id='services'>
        <p className='title-services'>services</p>
        <div className='services'>
          <Services
            nameIcon={'fa:mobile'}
            title={'mobile app development'}
            description={'Ofrezco servicios de desarrollo móvil para crear aplicaciones simples y funcionales en plataformas iOS y Android. Si tienes una idea para una aplicación o necesitas una presencia móvil básica para tu negocio, estoy aquí para ayudarte. Trabajaré contigo para crear una aplicación que cumpla con tus requisitos y sea fácil de usar para tus usuarios.'}
          />
          <Services
            nameIcon={'ion:desktop-outline'}
            title={'desktop app development'}
            description={'Mi enfoque en el desarrollo de aplicaciones de escritorio se centra en crear herramientas útiles y sencillas para mejorar la eficiencia de tu negocio. Si tienes una idea para una aplicación de escritorio que podría ayudarte a administrar datos o automatizar tareas, estaré encantado de colaborar contigo en su desarrollo. Juntos, podemos hacer realidad tu proyecto y crear una aplicación funcional.'}
          />
          <Services
            description={'Ofrezco servicios de programación en varios lenguajes y tecnologías. Si tienes un problema específico que resolver o una idea que te gustaría explorar, puedo trabajar contigo para crear pequeñas aplicaciones o scripts. Aunque mi experiencia no es muy amplia, estoy dispuesto a esforzarme y aprender para proporcionarte soluciones simples y funcionales.'}
            title={'programming languages'}
            nameIcon={'streamline:programming-script-code-code-angle-programming-file-bracket'} />
          <Services
            title={'freelancer'}
            description={'Estoy disponible para trabajar como freelancer en proyectos de desarrollo web y software. Si tienes una pequeña tarea o un proyecto que necesita atención, puedo ayudarte a abordarla de manera efectiva. Mi enfoque es aprender y crecer a través de cada proyecto, por lo que estaré comprometido en brindarte soluciones asequibles y de calidad.'}
            nameIcon={'simple-icons:freelancer'} />
        </div>
      </div>
      <div className='tecnologies section-margin' id='technologies'>
        <p className='tecnologie-text'>Tecnologíes</p>
        <div className='container-tecnologies'>
          <Tecnologies tecnologies={frontendData} title={'frontend'}/>
          <Tecnologies tecnologies={backendData} title={'backend'} />
          <div className='responsive-tablet'>
            <Tecnologies tecnologies={toolData} title={'tools'} />
          </div>
        </div>
      </div>
      <div id='contact'>
        <Contact/>
      </div>
    </>
  )
}

export default App
