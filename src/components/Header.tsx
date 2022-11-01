import { Box, Button, HStack, IconButton, useDisclosure } from "@chakra-ui/react";
import { FaAirbnb, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpMoadl";


export default function Header(){

    const { isOpen: isLoginOpen,
            onClose: onLoginClose,
            onOpen: onLoginOpen } = useDisclosure();
    
    const { isOpen: isSignUpOpen,
        onClose: onSignUpClose,
        onOpen: onSignUpOpen } = useDisclosure();
    
    return (
        <HStack
            py={"5"} px={"10"} borderBottomWidth={1}
            justifyContent={"space-between"}
        >
            <Box color="red.500">
                <Link to={"/"}>
                    <FaAirbnb size={"38"} />
                </Link>
            </Box>
            <HStack spacing={2}>
                <IconButton variant={"ghost"} aria-label="Toggle dark mode" icon={<FaMoon />} />
                <Button onClick={onLoginOpen}>Log in</Button>
                <Button onClick={onSignUpOpen} colorScheme={"red"}>Sign up</Button>
            </HStack>
            <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
            <SignUpModal isOpen={isSignUpOpen} onClose={onSignUpClose}/>
        </HStack>
    );
}