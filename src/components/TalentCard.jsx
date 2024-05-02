import { Box, Flex, Heading, Text } from '@chakra-ui/react'

export default function TalentCard() {
    return (
        <Flex w='100%' h='100%' position='relative'>
            <Flex w='90%' h='100%' bg='#D9D9D9' zIndex='2' borderRadius='20px' pos='absolute' right='0' top='0'>
                <Flex w='100%' height='100%' p='30px' flexDir='column' gap='20px'>
                    <Flex w='100%' h='20%' bg='#D9D9D9' position='relative'>
                        <Flex width='70px' h='70px' border='3px solid black' borderRadius='50%' pos='absolute' left='0' bottom='0' alignItems='center' justifyContent='center'>
                            <Flex w='100%' h='100%' bg='#D9D9D9' borderRadius='50%' zIndex='3' justify='center' alignItems='center'>
                                <Text fontSize='25px' fontWeight='700' color='black'>{`{/}`}</Text>
                            </Flex>
                        </Flex>
                        <Flex width='70px' h='70px' bg='#D9D9D9' border='3px solid black' borderRadius='50%' pos='absolute' left='50px' bottom='0' alignItems='center' justifyContent='center'>
                            <Flex w='100%' h='100%' bg='#D9D9D9' borderRadius='50%' zIndex='3' justify='center' alignItems='center'>
                                <Text fontSize='25px' fontWeight='700' color='black'>{`</>`}</Text>
                            </Flex>
                        </Flex>
                        <Flex width='70px' h='70px' bg='#D9D9D9'border='3px solid black' borderRadius='50%' pos='absolute' left='100px' bottom='0' alignItems='center' justifyContent='center'>
                            <Flex w='100%' h='100%' bg='#D9D9D9' borderRadius='50%' zIndex='3' justify='center' alignItems='center'>
                                <Text fontSize='25px' fontWeight='700' color='black'>{`>_`}</Text>
                            </Flex>
                        </Flex>
                        <Flex width='70px' h='70px' bg='#D9D9D9'border='3px solid black' borderRadius='50%' pos='absolute' left='150px' bottom='0' alignItems='center' justifyContent='center'>
                            <Flex w='100%' h='100%' bg='#D9D9D9' borderRadius='50%' zIndex='3' justify='center' alignItems='center'>
                                <Text fontSize='25px' fontWeight='700' color='black'>02</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex w='fit-content' height='10%'>
                        <Box w='fit-content' height='fit-content' fontSize='16px' fontWeight='600' p='5px 15px' bg='black' color='white' borderRadius='30px'>join</Box>
                    </Flex>
                    <Heading color='black' w='100%' height='15%' as='h2' m='0' p='0' fontSize='35px'>Talent sign up</Heading>
                    <Text color='black' fontWeight='600' w='70%' height='25%' fontSize='18px'>5 years of developement experience. Reside in one these countries.</Text>
                    <Flex w='100%' height='20%' bg='black' justifyContent='center' alignItems='center' borderRadius='20px' _hover={{cursor:'pointer'}}>
                        <Text fontWeight='500' fontSize='18px' w='fit-content' h='fit-content' color='white'>Join our pool</Text>
                    </Flex>
                </Flex>
            </Flex>
            <Box w='90%' h='40%' borderRadius='20px' border='2px solid black' position='absolute' bottom='-5%' left='5%' />
        </Flex>
      )
}
