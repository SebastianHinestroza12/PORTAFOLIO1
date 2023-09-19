import React from "react";
import {Logo} from '../Logo'
import { Box, Flex, HStack, IconButton, Button, useDisclosure, Stack, Link } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import './navbar.css'


const linkNames = ["Sobre Mi", "Proyectos", "Tecnologías"];
const linkTargets = ["#about", "#projects", "#technologies"];


const NavLink = (props) => {
  const { children, target } = props;
  return (
    <Box
      as="a"
      className="navbar-link"
      px={2}
      py={1}
      color={'white'}
      textTransform={'uppercase'}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: 'white',
        color: '#000'
      }}
      href={target}
    >
      {children}
    </Box>
  );
};

export const Navbar = ()=> {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box py={2} >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            bg={'#FFF'}
            onClick={isOpen ? onClose : onOpen}
          />
          <Flex>
            <Box>
              <Logo />
            </Box>
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
                bg={'#FFA500'}
                size={"md"}
                color={'#000'}
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
    </>
  );
}
