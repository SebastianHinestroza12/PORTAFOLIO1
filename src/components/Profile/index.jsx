import { Avatar, Box, Flex, keyframes } from '@chakra-ui/react'
import './profile.css'
export const Profile = ()=> {
  const size = 250
  const color = '#FFA500'

  const pulseRing = keyframes`
	0% {
    transform: scale(0.33);
  }
  40%,
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
	`

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
          width: '300%',
          height: '300%',
          boxSizing: 'border-box',
          marginLeft: '-100%',
          marginTop: '-100%',
          borderRadius: '50%',
          bgColor: color,
          animation: `2.95s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
        }}>
        <Avatar src="https://res.cloudinary.com/dafsjo7al/image/upload/v1691133740/Ellipse_2_2x_fk8uqu.png" size="full" position="absolute" top={0} />
      </Box>
    </Flex>
  )
}