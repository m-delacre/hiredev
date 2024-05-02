import { Box, Flex, Heading, Text } from '@chakra-ui/react'

export default function CancelCard() {
  return (
    <Flex w='100%' h='100%' position='relative'>
            <Flex w='90%' h='90%' bg='#FFE86D' zIndex='2' borderRadius='20px' pos='absolute' right='0' top='0'>
                <Flex w='100%' height='100%' p='25px' flexDir='column' gap='10px'>
                    <Flex w='100%' h='30%'>
                        <Box w='50px' h='50px' bg='black' borderRadius='50%' pos='relative'>
                            <Box w='100px' h='20px' bg='#FFE86D' transformOrigin='center' position='absolute' top='0' left='12px' right='0' bottom='0' m='auto' />
                            <Box w='100px' h='20px' bg='black' transformOrigin='center' position='absolute' top='0' left='15px' right='0' bottom='0' m='auto' />
                            <Box w='100px' h='20px' bg='#FFE86D' transformOrigin='center' position='absolute' top='0' left='20px' right='0' bottom='0' m='auto' />
                            <Box w='100px' h='20px' bg='black' transformOrigin='center' position='absolute' top='0' left='30px' right='0' bottom='0' m='auto' />
                            <Box w='100px' h='20px' bg='#FFE86D' transformOrigin='center' position='absolute' top='0' left='35px' right='0' bottom='0' m='auto' />
                            <Box w='100px' h='20px' bg='black' transformOrigin='center' position='absolute' top='0' left='37px' right='0' bottom='0' m='auto' />
                            <Box w='100px' h='20px' bg='#FFE86D' transformOrigin='center' position='absolute' top='0' left='40px' right='0' bottom='0' m='auto' />
                            <Box w='100px' h='20px' bg='black' transformOrigin='center' position='absolute' top='0' left='42px' right='0' bottom='0' m='auto' />
                            <Box w='100px' h='20px' bg='#FFE86D' transformOrigin='center' position='absolute' top='0' left='45px' right='0' bottom='0' m='auto' />
                        </Box>
                    </Flex>
                    <Text fontSize='25px' fontWeight='700' color='#AE9D4A'>cancel anytime</Text>
                    <Heading w='80%'>buy-off talent from platform</Heading>
                    <Text fontSize='25px' fontWeight='700' color='#AE9D4A'>free trial</Text>
                </Flex>
            </Flex>
            <Box w='90%' h='40%' borderRadius='20px' bg='black' position='absolute' bottom='5%' left='5%' />
        </Flex>
  )
}
