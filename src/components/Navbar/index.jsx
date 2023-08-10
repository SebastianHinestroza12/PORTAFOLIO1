import React from "react";
import {Logo} from '../Logo'
import { Box, Flex, HStack, IconButton, Button, useDisclosure, Stack, } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";



const linkNames = ["Home", "About Me", "Projects", "Services", "Technologies"];
const linkTargets = ["#home", "#about", "#projects", "#services", "#technologies"];


const NavLink = (props) => {
  const { children, target } = props;
  return (
    <Box
      as="a"
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
      <Box py={2}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Flex>
            <Box>
              <Logo />
            </Box>
          </Flex>

          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={10}
              display={{ base: "none", md: "flex" }}
            >
              {linkNames.map((name, index) => (
                <NavLink key={name} target={linkTargets[index]}>
                  {name}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Button
              variant={"solid"}
              bgGradient={"linear(to-tr, #C21500, #FFC500)"}
              size={"md"}
              onClick={() => {
                window.location.href = "#contact";
              }}

            >
              Contact
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
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
