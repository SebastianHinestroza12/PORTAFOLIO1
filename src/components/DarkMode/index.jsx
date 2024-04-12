/* eslint-disable no-unused-vars */
import React from "react";
import { Button, useColorMode } from '@chakra-ui/react';
import { Icon } from "@iconify/react";

export const ButtonColorMode = () => {
  const { toggleColorMode, colorMode } = useColorMode()

  return (
    <>
      <Button
        variant={"unstyled"}
        size={'md'}
        _hover={{ opacity: 0.8 }}
        transition="background-color 1.5s ease"
        onClick={toggleColorMode}
      >
        {colorMode === "light" ? (
          <Icon className="size-8" color="#001540" icon={'line-md:sunny-filled-loop-to-moon-filled-loop-transition'} />
        ) : (
            <Icon className="size-8" color="#FFA500" icon={'line-md:moon-filled-alt-to-sunny-filled-loop-transition'} />
        )}
      </Button>
    </>
  )
}