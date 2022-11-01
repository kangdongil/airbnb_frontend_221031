import { Box, Grid, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

export default function Home(){
    const sampleImage = "https://a0.muscache.com/im/pictures/11120eb8-9c87-459b-b102-8c3acf279728.jpg?im_w=1200"
    const sampleAddress = "Daegwalnyeong-myeon, Pyeongchang-gun, Kanwon Province, South Korea"
    return (
        <Grid
            mt={10}
            px={10}
            columnGap={4}
            rowGap={8}
            templateColumns={"repeat(5, 1fr)"}
        >
            <VStack alignItems={"flex-start"}>
                <Box overflow={"hidden"} mb={3} rounded="3xl">
                <Image
                    h="280"
                    src={sampleImage}
                />
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
                    <Text fontSize={"sm"} color="gray.600">
                        Seoul, S. Korea
                    </Text>
                </Box>
                <Text fontSize={"sm"} color="gray.600">
                    <Text as="b">$72</Text> / night
                </Text>
            </VStack>
        </Grid>
    );
}