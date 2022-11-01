import { Box, Button, HStack } from "@chakra-ui/react";
import { FaAirbnb } from "react-icons/fa";
import { Outlet } from "react-router-dom";

export default function Root(){
    return (
        <Box>
            <HStack
                py={"5"} px={"10"} borderBottomWidth={1}
                justifyContent={"space-between"}
            >
                <Box color="red.500">
                    <FaAirbnb size={"38"} />
                </Box>
                <HStack spacing={2}>
                    <Button>Log in</Button>
                    <Button colorScheme={"red"}>Sign up</Button>
                </HStack>
            </HStack>
            <Outlet />
        </Box>
    );
}