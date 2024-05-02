import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import HireCard from "../components/HireCard";
import FlexibleContracts from "../components/FlexibleContracts";
import CancelCard from "../components/CancelCard";
import TalentCard from "../components/TalentCard";

export default function Home() {
    return (
        <Flex
            w="100%"
            h="fit-content"
            flexDir="column"
            gap="0"
            flexWrap="wrap"
            pos="relative"
        >
            <Flex
                w="100%"
                h="fit-content"
                p="0px 0px 0px 0px"
                flexDir={{ base: "column", md: "column", lg: "row" }}
            >
                <Flex
                    w={{ base: "45%", sm: "100%", md: "100%", lg: "45%" }}
                    h="100%"
                    flexDir="column"
                >
                    <Heading fontSize="80px">Hire remote unicorn devs</Heading>
                    <Text w="70%" fontSize="20px" mt="30px">
                        Get matched with our elite group of hand-selected &
                        rigorously vetted UnicornDevs, assigned to you in 24
                        hours.
                    </Text>
                    <Flex
                        w="100%"
                        h="fit-content"
                        mt="60px"
                        gap="10px"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Flex w="30%" h="fit-content" flexDir="column">
                            <Flex
                                w="100%"
                                h="100px"
                                overflow="hidden"
                                pos="relative"
                            >
                                <Box
                                    border="2px solid black"
                                    borderRadius="50%"
                                    w="100%"
                                    h="20%"
                                    pos="absolute"
                                    bottom="0"
                                    right="55%"
                                />
                                <Box
                                    border="2px solid black"
                                    borderRadius="50%"
                                    w="100%"
                                    h="35%"
                                    pos="absolute"
                                    bottom="0"
                                    right="55%"
                                />
                                <Box
                                    border="2px solid black"
                                    borderRadius="50%"
                                    w="100%"
                                    h="60%"
                                    pos="absolute"
                                    bottom="0"
                                    right="55%"
                                />
                            </Flex>
                            <Text fontWeight="700" fontSize="40px">
                                8.3k
                            </Text>
                            <Text>professionals</Text>
                        </Flex>
                        <Flex
                            w="36%"
                            h="fit-content"
                            flexDir="column"
                            borderLeft="2px solid black"
                            borderRight="2px solid black"
                            p="20px 30px"
                        >
                            {/* <Flex
                                w="100%"
                                h="100px"
                                overflow="hidden"
                                pos="relative"
                                m="0"
                                p="0"
                                gap="0"
                            >
                                <Flex
                                    w="50%"
                                    h="50%"
                                    flexDir="column"
                                    pos="absolute"
                                    left="0"
                                    bottom="0"
                                >
                                    <Box
                                        border="2px solid black"
                                        borderRadius="0%"
                                        w="25%"
                                        h="50%"
                                    />
                                    <Box
                                        borderLeft="2px solid black"
                                        borderRight="2px solid black"
                                        borderBottom="2px solid black"
                                        borderRadius="0%"
                                        w="25%"
                                        h="50%"
                                    />
                                </Flex>
                                <Flex
                                    w="50%"
                                    h="50%"
                                    flexDir="column-reverse"
                                    pos="absolute"
                                    left="50%"
                                    bottom="0"
                                    transform="translateX(-50%)"
                                >
                                    <Box
                                        borderTop="2px solid black"
                                        borderBottom="2px solid black"
                                        borderRight="2px solid black"
                                        borderRadius="0%"
                                        w="25%"
                                        h="50%"
                                    />
                                </Flex>
                            </Flex> */}
                            <Flex
                                w="100%"
                                h="100px"
                                overflow="hidden"
                                pos="relative"
                                m="0"
                                p="0"
                                gap="0"
                            >
                                <Box
                                    pos="absolute"
                                    bottom="0"
                                    left="0"
                                    border="2px solid black"
                                    w="30px"
                                    h="30px"
                                ></Box>
                                <Box
                                    pos="absolute"
                                    bottom="30px"
                                    left="0"
                                    border="2px solid black"
                                    borderBottom="0"
                                    w="30px"
                                    h="30px"
                                ></Box>
                                <Box
                                    pos="absolute"
                                    bottom="0"
                                    left="30px"
                                    border="2px solid black"
                                    borderLeft="0"
                                    w="30px"
                                    h="30px"
                                ></Box>
                                <Box
                                    pos="absolute"
                                    bottom="29px"
                                    left="29px"
                                    bg="black"
                                    w="35px"
                                    h="2px"
                                    transformOrigin="top left"
                                    transform="rotate(-45deg)"
                                ></Box>
                                <Box
                                    pos="absolute"
                                    bottom="29px"
                                    left="29px"
                                    bg="black"
                                    w="30px"
                                    h="2px"
                                    transformOrigin="top left"
                                    transform="rotate(-70deg)"
                                ></Box>
                                <Box
                                    pos="absolute"
                                    bottom="29px"
                                    left="29px"
                                    bg="black"
                                    w="30px"
                                    h="2px"
                                    transformOrigin="top left"
                                    transform="rotate(-25deg)"
                                ></Box>
                                <Box
                                    pos="absolute"
                                    bottom="29px"
                                    left="29px"
                                    bg="black"
                                    w="40px"
                                    h="2px"
                                    transformOrigin="top left"
                                    transform="rotate(45deg)"
                                ></Box>
                            </Flex>
                            <Text fontWeight="700" fontSize="40px">
                                45
                            </Text>
                            <Text>dev categories</Text>
                        </Flex>
                        <Flex
                            w="33%"
                            h="fit-content"
                            flexDir="column"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            p="0px 30px"
                        >
                            <Flex
                                w="100%"
                                h="100px"
                                overflow="hidden"
                                pos="relative"
                            >
                                <Box
                                    border="2px solid black"
                                    w="25%"
                                    h="25%"
                                    pos="absolute"
                                    bottom="12px"
                                    left="0%"
                                    transform="perspective(50px) rotateY(45deg)"
                                />
                                <Box
                                    border="2px solid black"
                                    w="25%"
                                    h="25%"
                                    pos="absolute"
                                    bottom="12px"
                                    left="14%"
                                    transform="perspective(50px) rotateY(-45deg)"
                                />
                                <Box
                                    border="2px solid black"
                                    w="15%"
                                    h="30%"
                                    pos="absolute"
                                    bottom="10px"
                                    left="9%"
                                    transform="perspective(30px) rotateY(65deg)"
                                />
                                <Box
                                    border="2px solid black"
                                    w="15%"
                                    h="30%"
                                    pos="absolute"
                                    bottom="10px"
                                    left="15%"
                                    transform="perspective(30px) rotateY(-65deg)"
                                />
                            </Flex>
                            <Text fontWeight="700" fontSize="40px">
                                $120
                            </Text>
                            <Text>flat hourly rate</Text>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex w={{ base: "55%", sm: "100%", md: "100%", lg: "55%" }} mt={{ base: "0", sm: "100px", md: "100px", lg: "0" }} h="1000px" flexDir="column" pos="relative">
                    <Flex
                        w="100%"
                        h="100%"
                        pos="absolute"
                        flexDir="column"
                        top="0"
                        right="0"
                    >
                        <Flex w="100%" h="50%" pos="relative">
                            <Flex
                                w="50%"
                                h="100%"
                                pos="absolute"
                                left="0"
                                bottom="-50px"
                                zIndex="3"
                            >
                                <HireCard />
                            </Flex>
                            <Flex
                                w="50%"
                                h="75%"
                                pos="absolute"
                                right="0"
                                top="-50px"
                            >
                                <FlexibleContracts />
                            </Flex>
                        </Flex>
                        <Flex w="100%" h="50%" pos="relative" gap="80px">
                            <Flex
                                w="50%"
                                h="75%"
                                pos="absolute"
                                left="0"
                                bottom="50px"
                            >
                                <CancelCard />
                            </Flex>
                            <Flex
                                w="50%"
                                h="100%"
                                pos="absolute"
                                right="0"
                                top="-150px"
                            >
                                <TalentCard />
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}
