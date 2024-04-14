/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import React from "react";
import {
  Box, Flex, HStack, IconButton, Button, useDisclosure, Stack, Link, Text, Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { ButtonColorMode } from '../DarkMode'
import { LanguageSelector } from '../ChangeLanguage';
import { useTranslation } from 'react-i18next';
import './navbar.css'

const linkNames = ["navbar.about", "navbar.experience", "navbar.project", "navbar.technologies", "navbar.contact"];
const linkTargets = ["#about", "#experience", "#project", "#technologies", "#contact"];


const NavLink = (props) => {
  const { children, target, onClick } = props;
  return (
    <Box
      as="a"
      className="navbar-link"
      px={2}
      py={1}
      transition={'ease-in'}
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
  const { t } = useTranslation();

  return (
    <Box
      className="container_header"
      bg={useColorModeValue("#FFF", "#121212")}
    >
      <Box py={2}>

        <Flex h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexDirection={{ base: 'row-reverse', md: 'row' }}>
          <IconButton
            variant='unstyled'
            size={"md"}
            icon={<Icon icon="carbon:menu" width={40} color="#C21500" />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />

          {isOpen ? (
            <Drawer onClose={onClose} isOpen={isOpen} size='xs'>
              <DrawerOverlay />
              <DrawerContent bg={useColorModeValue("#FFF", "#121212")}>
                <DrawerCloseButton size={'lg'} />
                <DrawerHeader>{`Menú`}</DrawerHeader>
                <DrawerBody>
                  <Stack as={"nav"} spacing={0}>
                    {linkNames.map((name, index) => (
                      <React.Fragment key={name}>
                        <NavLink key={name} target={linkTargets[index]} onClick={() => onClose()}>
                          {t(name)}
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
                    <Box marginTop={10}>
                      <Text m={3} textTransform='uppercase'>Idiomas</Text>
                      <LanguageSelector onClosed={() => onClose()} />
                    </Box>
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
                  {t(name)}
                </NavLink>
              ))}
            </HStack>
          </HStack>

          {/* <Flex display={{ base: 'none', md: 'block' }} alignItems={"center"}>
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
          </Flex> */}

          <ButtonColorMode />
        </Flex>
      </Box>
    </Box>
  );
}
