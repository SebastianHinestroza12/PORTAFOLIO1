import React from 'react'
import { Box, chakra, Container, Stack, Text, useColorModeValue, VisuallyHidden, Flex } from '@chakra-ui/react'
import { FaInstagram, FaFacebook } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
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

export const Footer = () => {
  const { t } = useTranslation();
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
        <Flex className="container-text-logo">
          <Text color={'#FFA500'}
            fontSize={'3xl'}
            fontFamily={'cursive'}>Mena</Text>
          <Text color={'#C21500'}
            fontSize={'3xl'}
            fontFamily={'cursive'}>Dev</Text>
        </Flex>
        <Text className='text-footer'>{t('footer.copy')}</Text>
      </Container>
    </Box>
  )
}