import { Box, Flex, HStack, Text } from "@chakra-ui/react";

export default function Navbar() {
    return (
        <Flex as='nav' w="100%" h="80px" bg="white" justifyContent='center'>
            <HStack w='100%' h='100%' gap="30px" alignItems="center" justifyContent='flex-start' fontSize='20px' fontWeight='600'>
                <Flex alignItems="center" gap="5px">
                    <Text fontSize="25px" fontWeight="700" color="black">
                        hire
                    </Text>
                    <Flex
                        bg="black"
                        w="fit-content"
                        h="fit-content"
                        p="5px 15px"
                    >
                        <Text fontSize="25px" color="white">{`{dev}`}</Text>
                    </Flex>
                </Flex>
                <Box w="80px" h="2px" bg="black" />
                <Text _hover={{cursor:'pointer'}}>How we work</Text>
                <Text _hover={{cursor:'pointer'}}>Pricing</Text>
                <Text _hover={{cursor:'pointer'}}>FAQ</Text>
                <Text _hover={{cursor:'pointer'}}>Resources</Text>
            </HStack>
        </Flex>
    );
}
