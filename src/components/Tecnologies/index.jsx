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
    <Flex mx={{ base: 0, md: 2 }} my={{ base: 8, md: 0 }} className='gradient-tecno'>
      <Box className='container-tecno'>
        <Box>
          <Text
            textAlign={'center'}
            textTransform={'uppercase'}
            fontWeight={'bold'}
            fontSize={'md'}
          >{title}</Text>
        </Box>
        <Box className='tecno'>
            {tecnologies.map((tech, index) => (
              <Zoom key={index} triggerOnce duration={2500}>
                <Box
                  width={16}
                  height={20}
                  display={'flex'}
                  flexDirection={'column'}
                  justifyContent={'space-around'}
                  alignItems={'center'}
                >
                  <Box>
                    <Icon icon={tech.icon} width={40} />
                  </Box>
                  <Text
                    display={'flex'}
                    flexWrap={'wrap'}
                    textTransform={'uppercase'}
                    fontWeight={'light'}
                    fontSize={'xs'}
                    textAlign={'center'}
                  >{tech.name}</Text>
                </Box>
              </Zoom>
            ))}
        </Box>
      </Box>
    </Flex>
  )
}
