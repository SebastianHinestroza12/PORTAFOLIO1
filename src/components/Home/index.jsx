// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import { Box } from "@chakra-ui/react";
import { Navbar } from '../Navbar';
import { Job } from '../Job';
import { AboutMe } from '../AboutMe';
import { Experience } from '../Experience';
import { Tecnologies } from '../Tecnologies';
import { Project } from '../Project';
import { Contact } from '../Contact';
import { data, title } from '../Tecnologies/data';
import { Icon } from "@iconify/react";
import { ScrollToTopButton } from '../ScrollToTop'
import { LanguageSelector } from '../ChangeLanguage';
import { useTranslation } from 'react-i18next';
import './home.css';

export const Home = () => {

  const { t } = useTranslation();
  useEffect(() => {
    localStorage.setItem('selectedLanguage', 'en')
  }, [])

  return (
    <main>
      <Box>
        <ScrollToTopButton />
      </Box>

      <Box display={{ base: 'none', md: 'block' }}>
        <LanguageSelector />
      </Box>

      <Box boxShadow="lg" className="sticky top-0 z-50">
        <Navbar />
      </Box>


      <Box className='section-margin'>
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

      <Box className='section-margin' id='technologies'>
        <div>
          <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3">
            <Icon icon="mingcute:computer-fill" width={35} />
            {t('tecnologies.title')}
          </h2>
        </div>
        <Box
          display={{ base: 'block', md: 'flex' }}
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