import { Box, Button, Grid, HStack, Image, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { FaRegHeart, FaStar } from "react-icons/fa";

export default function Room() {
    const sampleImage = "https://a0.muscache.com/im/pictures/11120eb8-9c87-459b-b102-8c3acf279728.jpg?im_w=1200"
    const sampleAddress = "Daegwalnyeong-myeon, Pyeongchang-gun, Kanwon Province, South Korea"

    const gray = useColorModeValue("gray.600", "gray.300");
    return(
        <VStack alignItems={"flex-start"}>
            <Box position="relative" overflow={"hidden"} mb={3} rounded="2xl">
                <Image
                    minH="280"
                    src={sampleImage}
                />
                <Button
                    variant={"unstyled"}
                    position="absolute"
                    top={2}
                    right={0}
                    color="white"
                >
                    <FaRegHeart size="20px" />
                </Button>
            </Box>
            <Box>
                <Grid gap={2} templateColumns={"6fr 1fr"}>
                    <Text as="b" noOfLines={1} fontSize="md">
                        {sampleAddress}
                    </Text>
                    <HStack spacing={1}>
                        <FaStar size={15} />
                        <Text>5.0</Text>
                    </HStack>
                </Grid>
                <Text fontSize={"sm"} color={gray}>
                    Seoul, S. Korea
                </Text>
            </Box>
            <Text fontSize={"sm"} color={gray}>
                <Text as="b">$72</Text> / night
            </Text>
        </VStack>
    );
}
