import React from 'react'
import { Container, Flex, Box, Heading, Text, IconButton, Button, VStack, HStack, Wrap, WrapItem, FormControl, FormLabel, Input, InputGroup, InputLeftElement, Textarea, } from '@chakra-ui/react'
import { MdPhone, MdEmail, MdLocationOn, MdFacebook, MdOutlineEmail, } from 'react-icons/md'
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs'
import { Footer } from '../Footer';
import './contact.css'

export const Contact = () => {
  const gradient = 'linear-gradient(to bottom, #000C40, #607D8B)';

  return (
    <Container
      className='contact'
      // bg={'#02054B'}
      bgGradient={gradient}
      maxW="full"
      centerContent
      overflow="hidden"
    >
      <Flex className='container-flex'>
        <Box
          // bg="#020"
          color="white"
          w={'full'}
          borderRadius="lg"
        >
          <Box pt={4} px={9}>
            <Wrap className='con-flex'>
              <WrapItem className='wrap-one'>
                <Box>
                  <Heading>Contact</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="#FFF">
                    Fill up the form below to contact
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 8 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="250px"
                        justifyContent={'flex-start'}
                        variant="ghost"
                        color="#FFF"
                        _hover={{ border: '2px solid #FFA500' }}
                        leftIcon={<MdPhone color="orange" size="20px" />}>
                        +57-3232883290
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="250px"
                        variant="ghost"
                        justifyContent={'flex-start'}
                        color="#FFF"
                        _hover={{ border: '2px solid #FFA500' }}
                        leftIcon={<MdEmail color="orange" size="20px" />}>
                        menas7527@gmail.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="250px"
                        justifyContent={'flex-start'}
                        variant="ghost"
                        color="#FFF"
                        _hover={{ border: '2px solid #FFA500' }}
                        leftIcon={<MdLocationOn color="orange" size="20px" />}>
                        Medellín, Colombia
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start">
                    <IconButton
                      aria-label="facebook"
                      // variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<MdFacebook size="28px" />}
                    />
                    <IconButton
                      aria-label="github"
                      // variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: 'purple' }}
                      icon={<BsGithub size="28px" />}
                    />
                    <IconButton
                      aria-label="discord"
                      // variant="unstyled"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#5562EA' }}
                      icon={<BsDiscord size="28px" />}
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem className='wrap-two'>
                <Box w={'full'} bg="#101630" borderRadius="lg">
                  <Box m={8} color="#FFF">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <BsPerson color="gray.800" />
                          </InputLeftElement>
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <MdOutlineEmail color="gray.800" />
                          </InputLeftElement>
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: 'gray.300',
                          }}
                          placeholder="message"
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button variant="solid" bg="#FFA500" color="white" _hover={{}}>
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
            <Footer/>
          </Box>
        </Box>
      </Flex>
    </Container>
  )
}