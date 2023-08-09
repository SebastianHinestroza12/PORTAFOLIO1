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
      <div className='section-margin'>
        <div className='projects'>
          <p>projects</p>
        </div>
        <Projects
          numberProject={1}
          title={'Ecommerce Projects'}
          image={ 'https://res.cloudinary.com/dafsjo7al/image/upload/v1687084691/e19d57a2-00be-4377-ae6d-0e390d3d5fed_qzj30g.jpg'}
          description={'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'}
          alt={'Projects1'}
        /> 
        <Projects
          numberProject={2}
          title={'Ecommerce Projects'}
          image={ 'https://res.cloudinary.com/dafsjo7al/image/upload/v1687084691/e19d57a2-00be-4377-ae6d-0e390d3d5fed_qzj30g.jpg'}
          description={'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'}
          alt={'Projects2'}
          invertContent
        /> 
      </div>
      <div className='container-services section-margin'>
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
      <div className='tecnologies section-margin'>
        <p className='tecnologie-text'>Tecnologíes</p>
        <div className='container-tecnologies'>
          <Tecnologies tecnologies={frontendData} title={'frontend'}/>
          <Tecnologies tecnologies={backendData} title={'backend'}/>
          <Tecnologies tecnologies={toolData} title={'tools'}/>
        </div>
      </div>
      <div>
        <Contact/>
      </div>
    </>
  )
}

export default App
