/* eslint-disable no-unused-vars */
import React from 'react';
import { Profile } from '../Profile';
import { Button, Link, Box, Text } from "@chakra-ui/react";
import { Zoom } from "react-awesome-reveal";
import { useTranslation } from 'react-i18next';

export const AboutMe = () => {
  const { t } = useTranslation();
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
          {t('profile.about')}
        </Text>
        <Text marginBottom={3}>{t('profile.description')}</Text>
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
              {t('profile.contactMe')}
            </Button>
          </Link>
        </Box>
      </Box>
    </section>
  )
}
