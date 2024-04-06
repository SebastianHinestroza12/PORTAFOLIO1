// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Text, Box } from "@chakra-ui/react";
import { Navbar } from '../Navbar';
import { Job } from '../Job';
import { AboutMe } from '../AboutMe';
import { Experience } from '../Experience';
import { Tecnologies } from '../Tecnologies';
import { Project } from '../Project';
import { Contact } from '../Contact';
import { data, title } from '../Tecnologies/data';
import { Icon } from "@iconify/react";
import './home.css';

export const Home = () => {
  return (
    <main>
      <Box className='section-margin'>
        <Navbar />
        <Job />
      </Box>

      <Box id='about' className='section-margin'>
        <AboutMe />
      </Box>

      <Box id='experience' className='section-margin'>
        <Experience />
      </Box>

      <Box id='project' className='section-margin'>
        <Project />
      </Box>

      <Box className='tecnologies section-margin' id='technologies'>
        <Box className="flex">
          <Icon icon="mingcute:computer-fill" width={35} color="#FFF" />
          <h2 className="text-white text-2xl font-bold text-center flex items-center ml-4">
            Tecnologías
          </h2>
        </Box>
        <Box
          display={{ base: 'block', md: 'flex' }} bg={'red.200'}
          justifyContent={'space-between'}
          alignItems={'center'}
          marginTop={10}

        >
          {
            data.map((tech, index) => (
              <Box key={index} flex="1">
                <Tecnologies tecnologies={tech} title={title[index]} />
              </Box>
            ))
          }
        </Box>
      </Box>

      <Box id='contact'>
        <Contact />
      </Box>
    </main>
  )
}