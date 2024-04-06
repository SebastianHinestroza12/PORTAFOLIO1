/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import './tecnologies.css'
import { Icon } from '@iconify/react';
import { Zoom } from "react-awesome-reveal";
import { Text, Box, Flex } from "@chakra-ui/react";


// eslint-disable-next-line react/prop-types
export const Tecnologies = ({ tecnologies, title }) => {
  return (

    <Flex mx={{ base: 0, md: 4 }} my={{ base: 6, md: 0 }} className='gradient-tecno'>
      <Box className='container-tecno'>
        <Box>
          <Text className='title-tecno'>{title}</Text>
        </Box>
        <Box className='tecno'>
            {tecnologies.map((tech, index) => (
              <Zoom key={index} triggerOnce duration={2500}>
                <Box className='icon-tecno' key={index}>
                  <Box className='imagen-tecno'>
                    <Icon icon={tech.icon} width={40} />
                  </Box>
                  <Text className='tecno-text'>{tech.name}</Text>
                </Box>
              </Zoom>
            ))}
        </Box>
      </Box>
    </Flex>
  )
}
