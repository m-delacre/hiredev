import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function RouteLayout() {
    return (
        <Flex w="100%" height="100%" justifyContent='center'>
            <Flex w='1400px' h="100%" flexDir="column" p={{ base: "0", sm: "50px", md: "50px", lg: "0" }}>
                <Navbar />
                <Outlet />
            </Flex>
        </Flex>
    );
}
