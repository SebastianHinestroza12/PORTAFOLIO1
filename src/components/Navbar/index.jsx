import React from "react";
import {
  Box, Flex, HStack, IconButton, Button, useDisclosure, Stack, Link, Text
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { Icon } from "@iconify/react";


const linkNames = ["Sobre Mi", "Experiencia", "Proyectos", "Tecnologías"];
const linkTargets = ["#about", "#experience", "#project", "#technologies"];


const NavLink = (props) => {
  const { children, target, onClick } = props;
  return (
    <Box
      as="a"
      className="navbar-link"
      px={2}
      py={1}
      transition={'ease-in'}
      color={'white'}
      textTransform={'uppercase'}
      rounded={"3xl"}
      fontSize={'sm'}
      _hover={{
        textDecoration: "none",
        bg: '#C21500'
      }}
      onClick={() => {
        onClick();
      }}
      href={target}
    >
      {children}
    </Box>
  );
};

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const closeMenu = () => {
    onClose();
  };

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex="sticky"
      boxShadow="md"
      bg={'#121212'}
    >
      <Box py={2}>

        <Flex h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexDirection={{ base: 'row-reverse', md: 'row' }}>
          <IconButton
            variant='ghost'
            size={"md"}
            icon={isOpen ? <CloseIcon color={'#C21500'} /> : <Icon icon="carbon:menu" width={40} color="#C21500" />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            _hover={{
              textDecoration: "none",
              bg: '#FFA500'
            }}
          />

          {isOpen ? (
            <Box
              bg={'#121212'}
              transform={isOpen ? 'translateX(0)' : 'translateX(100%)'}
              transition={'transform 0.5s ease-in-out'}
              position="fixed"
              top={0}
              right={0}
              zIndex={10}
              h="100vh"
              w="100%"
              padding={9}
            >
              <Flex justifyContent="space-between" marginBottom={8}>
                <Text color={'white'} fontSize={'2xl'}>Menú</Text>
                <IconButton
                  variant='ghost'
                  icon={<CloseIcon color={'#C21500'} />}
                  aria-label="Close Menu"
                  onClick={closeMenu}
                  _hover={{
                    textDecoration: "none",
                    bg: '#FFA500'
                  }}
                />
              </Flex>
              <Stack as={"nav"} spacing={0}>
                {linkNames.map((name, index) => (
                  <React.Fragment key={name}>
                    <NavLink key={name} target={linkTargets[index]} onClick={closeMenu}>
                      {name}
                    </NavLink>
                    {index !== linkNames.length - 1 && (
                      <Box
                        borderBottom="1px solid white"
                        width="100%"
                        height="1px"
                        my={1}
                      />
                    )}
                  </React.Fragment>
                ))}
              </Stack>

            </Box>
          ) : null}

          <Flex>
            <Text
              color={'#FFA500'}
              fontSize={'3xl'}
              fontFamily={'cursive'}
            >
              Mena
            </Text>
            <Text
              color={'#C21500'}
              fontSize={'3xl'}
              fontFamily={'cursive'}
            >
              Dev
            </Text>
          </Flex>

          <HStack display={{ base: "none", md: 'flex' }} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
            >
              {linkNames.map((name, index) => (
                <NavLink key={name} target={linkTargets[index]} onClick={closeMenu}>
                  {name}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex display={{ base: 'none', md: 'block' }} alignItems={"center"}>
            <Link href="#contact">
              <Button
                variant={"solid"}
                bg={'#FFA500'}
                size={"md"}
                color={'#000'}
                rounded={"3xl"}
                _hover={{
                  textDecoration: "none",
                  bg: '#C21500',
                  color: '#FFF'
                }}
              >
                Contacto
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
