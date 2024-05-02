import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export default function FlexibleContracts() {
    return (
        <Flex w='100%' h='100%' position='relative'>
            <Flex w='90%' h='90%' bg='#33FFA9' zIndex='2' borderRadius='20px' pos='absolute' right='0' top='0'>
                <Flex w='100%' height='100%' p='30px' flexDir='column' gap='10px'>
                    <Flex w='100%' h='30%'>
                        <Box w='50px' h='50px' bg='black' borderRadius='50%' pos='relative'>
                            <Box w='100px' h='20px' bg='#33FFA9' transformOrigin='center' position='absolute' top='0' left='15px' right='0' bottom='0' m='auto' />
                            <Box w='100px' h='20px' bg='black' transformOrigin='center' position='absolute' top='0' left='18px' right='0' bottom='0' m='auto' />
                            <Box w='100px' h='20px' bg='#33FFA9' transformOrigin='center' position='absolute' top='0' left='25px' right='0' bottom='0' m='auto' />
                            <Box w='100px' h='20px' bg='black' transformOrigin='center' position='absolute' top='0' left='28px' right='0' bottom='0' m='auto' />
                            <Box w='100px' h='20px' bg='#33FFA9' transformOrigin='center' position='absolute' top='0' left='35px' right='0' bottom='0' m='auto' />
                        </Box>
                    </Flex>
                    <Text fontSize='25px' fontWeight='700' color='#1F9965'>flexible contracts</Text>
                    <Heading>find talent in 24 hours</Heading>
                    <Text fontSize='25px' fontWeight='700' color='#1F9965'>pre-screened talent</Text>
                </Flex>
            </Flex>
            <Box w='90%' h='40%' borderRadius='20px' bg='black' position='absolute' bottom='5%' left='5%' />
        </Flex>
      )
}
