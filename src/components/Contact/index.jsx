/* eslint-disable no-unused-vars */
import React from 'react'
import { Container, Flex, Link, Box, Heading, IconButton, Button, VStack, HStack, Wrap, WrapItem, FormControl, FormLabel, Input, InputGroup, InputLeftElement, Textarea, } from '@chakra-ui/react'
import { MdPhone, MdEmail, MdLocationOn, MdOutlineEmail } from 'react-icons/md'
import { BsGithub, BsPerson, BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import { Footer } from '../Footer';
import { useTranslation } from 'react-i18next';
import './contact.css'


export const Contact = () => {
  const gradient = 'repeating-linear-gradient(to bottom, #FFA500, #000)';
  const { t } = useTranslation();
  return (
      <Container
        className='contact'
        bgGradient={gradient}
        maxW="full"
        centerContent
        overflow="hidden"
      >
        <Flex className='container-flex'  >
          <Box
            color="white"
            w={'full'}
            borderRadius="lg"
          >
            <Box className='container-form' pt={4} px={9}>
              <Wrap className='con-flex'>
                <WrapItem className='wrap-one'>
                  <Box className='box-contact' w={'full'}>
                  <Heading>{t('contact.title')}</Heading>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 8 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        <Button
                          size="md"
                          height="48px"
                          width="250px"
                          justifyContent={'flex-start'}
                          variant="ghost"
                          color="#FFF"
                        _hover={{ border: '2px solid #000' }}
                        leftIcon={<MdPhone color="#000" size="20px" />}>
                          +57-3232883290
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="250px"
                          variant="ghost"
                          justifyContent={'flex-start'}
                          color="#FFF"
                        _hover={{ border: '2px solid #000' }}
                        leftIcon={<MdEmail color="#000" size="20px" />}>
                          menas7527@gmail.com
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="250px"
                          justifyContent={'flex-start'}
                          variant="ghost"
                          color="#FFF"
                        _hover={{ border: '2px solid #000' }}
                        leftIcon={<MdLocationOn color="#000" size="20px" />}>
                          Medellín, Colombia
                        </Button>
                      </VStack>
                    </Box>
                    <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      alignItems="flex-start">
                      <Link href='https://github.com/SebastianHinestroza12' target='_blank'>
                        <IconButton
                          href="https://www.facebook.com/tu-perfil"
                          aria-label="github"
                          size="lg"
                          isRound={true}
                          _hover={{ bg: 'purple' }}
                          icon={<BsGithub size="28px" />}
                        />
                      </Link>
                      <Link href='https://www.linkedin.com/in/sebastian-mena12/' target='_blank'>
                        <IconButton
                          aria-label="Linkedin"
                          size="lg"
                          isRound={true}
                          _hover={{ bg: '#0D74FF' }}
                          icon={<BsLinkedin size="28px" />}
                        />
                      </Link>
                      <Link href='https://api.whatsapp.com/send?phone=573232883290&text=Hola%20Sebastian,%20me%20intereso%20tu%20perfil.' target='_blank'>
                        <IconButton
                          aria-label="Linkedin"
                          size="lg"
                          isRound={true}
                          _hover={{ bg: '#44C052' }}
                          icon={<BsWhatsapp size="28px" />}
                        />
                      </Link>
                    </HStack>
                  </Box>
                </WrapItem>
                <WrapItem className='wrap-two'>
                <Box w={'full'} bg="black" borderRadius="lg">
                    <Box m={8} color="#FFF">
                      <form action="https://formspree.io/f/xnqkppbd" method="POST">
                        <VStack spacing={5}>
                          <FormControl id="name">
                          <FormLabel>{t('contact.form.name')}</FormLabel>
                            <InputGroup borderColor="#E0E1E7">
                              <InputLeftElement pointerEvents="none">
                                <BsPerson color="gray.800" />
                              </InputLeftElement>
                              <Input name='name' type="text" size="md" required />
                            </InputGroup>
                          </FormControl>
                          <FormControl id="email">
                          <FormLabel>{t('contact.form.email')}</FormLabel>
                            <InputGroup borderColor="#E0E1E7">
                              <InputLeftElement pointerEvents="none">
                                <MdOutlineEmail color="gray.800" />
                              </InputLeftElement>
                              <Input name='email' type="text" size="md" required />
                            </InputGroup>
                          </FormControl>
                          <FormControl id="message">
                          <FormLabel>{t('contact.form.msg')}</FormLabel>
                            <Textarea
                            required
                            name='message'
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: 'gray.300',
                            }}
                            placeholder={t('contact.form.placeholder')}
                            />
                          </FormControl>
                          <FormControl id="submit" float="right">
                            <Button className='button-form' type="submit" variant="solid" bg="#FFA500" color="#000" _hover={{}}>
                            {t('contact.form.send')}
                            </Button>
                          </FormControl>
                        </VStack>
                      </form>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
              <Footer />
            </Box>
          </Box>
        </Flex>
    </Container>
  )
}