import React from "react";
import {
  Box, Flex, HStack, IconButton, Button, useDisclosure, Stack, Link, Text
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Icon } from "@iconify/react";
import './navbar.css'


const linkNames = ["Sobre Mi", "Experiencia", "Proyectos", "Tecnologías"];
const linkTargets = ["#about", "#experiencia", "#projects", "#technologies"];


const NavLink = (props) => {
  const { children, target } = props;
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
      _hover={{
        textDecoration: "none",
        bg: '#C21500'
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
    >
      <Box py={2} >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            variant='outline'
            size={"md"}
            icon={isOpen ? <CloseIcon color={'#C21500'} /> : <Icon icon="carbon:menu" width={40} color="#C21500" />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Flex className="container-text-logo">
            <Text className="text-logo">Mena</Text>
            <Text className="dev">Dev</Text>
          </Flex>

          <HStack className="navigation" alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {linkNames.map((name, index) => (
                <NavLink key={name} target={linkTargets[index]}>
                  {name}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex className="mobile-none" alignItems={"center"}>
            <Link href="#contact">
              <Button
                variant={"solid"}
                bg={'#FFC500'}
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

        {isOpen ? (
          <Box>
            <Stack as={"nav"} spacing={4}>
              {linkNames.map((name, index) => (
                <NavLink key={name} target={linkTargets[index]}>
                  {name}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
}
