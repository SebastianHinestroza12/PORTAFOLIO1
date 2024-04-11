/* eslint-disable react/prop-types */
import React from "react";
import {
  Box, Flex, HStack, IconButton, Button, useDisclosure, Stack, Link, Text, Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
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
            icon={<Icon icon="carbon:menu" width={40} color="#C21500" />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            _hover={{
              textDecoration: "none",
              bg: '#FFA500'
            }}
          />

          {isOpen ? (
            <Drawer onClose={onClose} isOpen={isOpen} size='xs'>
              <DrawerOverlay />
              <DrawerContent bg={'#212121'}>
                <DrawerCloseButton />
                <DrawerHeader>{`Menú`}</DrawerHeader>
                <DrawerBody>
                  <Stack as={"nav"} spacing={0}>
                    {linkNames.map((name, index) => (
                      <React.Fragment key={name}>
                        <NavLink key={name} target={linkTargets[index]} onClick={() => onClose()}>
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
                </DrawerBody>
              </DrawerContent>
            </Drawer>
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
                <NavLink key={name} target={linkTargets[index]}>
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
