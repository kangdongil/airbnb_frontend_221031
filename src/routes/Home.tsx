import { Box, Button, Grid, Heading, HStack, Image, Skeleton, SkeletonText, Text, VStack } from "@chakra-ui/react";
import Room from "../components/Room";

export default function Home(){
    
    
    return (
        <Grid
            mt={10}
            px={{
                sm: 10,
                lg: 40,
            }}
            columnGap={4}
            rowGap={8}
            templateColumns={{
                sm: "1fr",
                md: "1fr 1fr",
                lg: "repeat(3, 1fr)",
                xl: "repeat(4, 1fr)",
                "2xl": "repeat(5, 1fr)",
            }}
        >
            <Box>
                <Skeleton rounded="2xl" height={280} mb={3} />
                <SkeletonText w="70%" noOfLines={2} />
            </Box>
            <Box>
                <Skeleton rounded="2xl" height={280} mb={3} />
                <SkeletonText w="70%" noOfLines={2} />
            </Box>
            <Box>
                <Skeleton rounded="2xl" height={280} mb={3} />
                <SkeletonText w="70%" noOfLines={2} />
            </Box>
            <Box>
                <Skeleton rounded="2xl" height={280} mb={3} />
                <SkeletonText w="70%" noOfLines={2} />
            </Box>
            <Box>
                <Skeleton rounded="2xl" height={280} mb={3} />
                <SkeletonText w="70%" noOfLines={2} />
            </Box>
            <Box>
                <Skeleton rounded="2xl" height={280} mb={3} />
                <SkeletonText w="70%" noOfLines={2} />
            </Box>
            <Box>
                <Skeleton rounded="2xl" height={280} mb={3} />
                <SkeletonText w="70%" noOfLines={2} />
            </Box>
        </Grid>
    );
}