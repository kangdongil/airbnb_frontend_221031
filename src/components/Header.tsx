import { Box, Button, HStack, IconButton, LightMode, useColorMode, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { FaAirbnb, FaMoon, FaSun } from "react-icons/fa";
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
    const { colorMode, toggleColorMode } = useColorMode();
    const logoColor = useColorModeValue("red.500", "red.300");
    const BrightnessIcon = useColorModeValue(FaMoon, FaSun);
    return (
        <HStack
            py={"5"} px={"40"} borderBottomWidth={1}
            justifyContent={"space-between"}
        >
            <Box color={logoColor}>
                <Link to={"/"}>
                    <FaAirbnb size={"38"} />
                </Link>
            </Box>
            <HStack spacing={2}>
                <IconButton 
                    onClick={toggleColorMode}
                    variant={"ghost"}
                    aria-label="Toggle dark mode"
                    icon={<BrightnessIcon />}
                />
                <Button onClick={onLoginOpen}>Log in</Button>
                <LightMode>
                    <Button onClick={onSignUpOpen} colorScheme={"red"}>Sign up</Button>
                </LightMode>
            </HStack>
            <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
            <SignUpModal isOpen={isSignUpOpen} onClose={onSignUpClose}/>
        </HStack>
    );
}