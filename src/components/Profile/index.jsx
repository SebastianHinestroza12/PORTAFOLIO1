import { Avatar, Box, Flex, keyframes } from '@chakra-ui/react'
import './profile.css'
export const Profile = ()=> {
  const size = 250
  const color = '#FFA500'

  return (
    <Flex
      justifyContent="flex-start"
      alignItems="center"
      h="full"
      w="full"
    >
      <Box
        as="div"
        className='profile-image'
        position="relative"
        w={size}
        h={size}
        _before={{
          content: "''",
          position: 'relative',
          display: 'block',
          width: '100%',
          height: '100%',
          boxSizing: 'border-box',
          borderRadius: '50%',
          bgColor: color,
        }}>
        <Avatar src="https://res.cloudinary.com/dafsjo7al/image/upload/v1691133740/Ellipse_2_2x_fk8uqu.png" size="full" position="absolute" top={0} />
      </Box>
    </Flex>
  )
}