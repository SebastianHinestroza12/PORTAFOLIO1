import { Navbar } from './components/Navbar';
import { Job } from './components/Job';
import { AboutMe } from './components/AboutMe';
import { Tecnologies } from './components/Tecnologies'
import { data, title } from './components/Tecnologies/data'
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Project } from './components/Project';
import { Text, Box } from "@chakra-ui/react";
import './App.css'

function App() {
  return (
    <main>
      <Box className='section-margin'>
        <Navbar />
        <Job />
        <AboutMe />
      </Box>

      <Box className='section-margin'>
        <Experience />
      </Box>

      <Box className='section-margin'>
        <Project />
      </Box>

      <Box className='tecnologies section-margin' id='technologies'>
        <Text className='tecnologie-text'>Tecnologías</Text>
        <Box className='container-tecnologies'>
          {
            data.map((tech, index) => (
              <Tecnologies key={index} tecnologies={tech} title={title[index]} />
            ))
          }
        </Box>
      </Box>

      <Box id='contact'>
        <Contact/>
      </Box>
    </main>
  )
}

export default App
