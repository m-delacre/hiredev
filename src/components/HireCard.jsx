import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export default function HireCard() {
  return (
    <Flex w='100%' h='100%' position='relative'>
        <Flex w='90%' h='90%' bg='black' zIndex='2' borderRadius='20px' pos='absolute' right='0' top='0'>
            <Flex w='100%' height='100%' p='30px' flexDir='column' gap='20px'>
                <Flex w='100%' h='20%' bg='black' position='relative'>
                    <Box width='70px' h='70px' zIndex='3'border='2px solid white' borderRadius='50%' pos='absolute' left='0' bottom='0' />
                    <Box width='70px' h='70px' zIndex='3' border='2px solid white' borderRadius='50%' pos='absolute' left='50px' bottom='0' />
                    <Box width='70px' h='70px' bg='black' zIndex='2' border='2px solid white' borderRadius='50%' pos='absolute' left='100px' bottom='0' />
                    <Box width='70px' h='70px' zIndex='3' border='2px solid white' borderRadius='50%' pos='absolute' left='150px' bottom='0' />
                    <Flex width='70px' h='70px' bg='white' border='2px solid white' borderRadius='50%' pos='absolute' left='150px' bottom='0' alignItems='center' justifyContent='center'>
                        <Text fontSize='30px' fontWeight='800' color='black'>01</Text>
                    </Flex>
                    <Box width='115px' h='20px' zIndex='3' border='2px solid white' borderRadius='50%' position='absolute' top='0' left='-115px' right='0' bottom='0' m='auto' />
                </Flex>
                <Flex w='fit-content' height='10%'>
                    <Box w='fit-content' height='fit-content' fontSize='16px' fontWeight='600' p='0px 15px' bg='white' borderRadius='30px'>hire</Box>
                </Flex>
                <Heading color='white' w='100%' height='15%' as='h2' m='0' p='0' fontSize='35px'>Hire talent</Heading>
                <Text color='white' w='70%' height='25%' fontSize='18px'>Flat hourly rate. Devs with minimum 5 years experience.</Text>
                <Flex w='100%' height='20%' bg='#33FFA9' justifyContent='center' alignItems='center' borderRadius='20px' _hover={{cursor:'pointer'}}>
                    <Text fontWeight='700' fontSize='18px' w='fit-content' h='fit-content'>Hire now</Text>
                </Flex>
            </Flex>
        </Flex>
        <Box w='90%' h='40%' borderRadius='20px' border='2px solid black' position='absolute' bottom='5%' left='5%' />
    </Flex>
  )
}
