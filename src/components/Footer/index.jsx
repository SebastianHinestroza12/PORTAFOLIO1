import React from 'react'
import { Box, chakra, Container, Stack, Text, useColorModeValue, VisuallyHidden, } from '@chakra-ui/react'
import { FaInstagram, FaFacebook } from 'react-icons/fa'
import { Logo} from '../Logo'
import './footer.css'


const SocialButton = ({children,label,href}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      target='_blank'
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export const Footer = ()=> {
  return (
    <Box
      className='container-footer'>
      <Container
        className='footer-mobile'
        as={Stack}
        maxW={'full'}
        py={2}
        direction={{ base: 'column', md: 'row' }}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Logo />
        <Text className='text-footer'>© 2023 Sebastian Mena. All rights reserved</Text>
        <Stack className='social-footer' direction={'row'}>
          <SocialButton label={'Facebook'} href={'https://www.facebook.com/sebastian.menahinestrosa/'}>
            <FaFacebook />
          </SocialButton>
          <SocialButton label={'Instagram'} href={'https://www.instagram.com/sebastianmh12'}>
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  )
}