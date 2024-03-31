import { Avatar, Box, Flex } from '@chakra-ui/react'

export const Profile = ()=> {
  const size = 220

  return (
      <Flex
        justifyContent="flex-start"
        alignItems="center"
        h="full"
        w="full"
      >
        <Box
        as="div"
          position="relative"
          w={size}
          h={size}
        >
        <Avatar src="https://res.cloudinary.com/dafsjo7al/image/upload/v1711904110/Ellipse_2_2x_nksiau.png" size="full" position="absolute" top={0} />
        </Box>
    </Flex>
  )
}