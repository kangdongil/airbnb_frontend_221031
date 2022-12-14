import { Grid } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import Room from "../components/Room";
import RoomSkeleton from "../components/RoomSkeleton";
import { getRooms } from "./api";

interface IPhoto {
    "pk": string;
    "file": string;
    "description": string;
}

interface IRoom {
    "pk": number;
    "name": string;
    "country": string;
    "city": string;
    "price": number;
    "rating": number;
    "is_owner": boolean;
    // "photos": Photos[];
}

export default function Home(){
    const { isLoading, data } = useQuery<IRoom[]>(["rooms"], getRooms);
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
            {isLoading ? (
                <>
                    <RoomSkeleton />
                    <RoomSkeleton />
                    <RoomSkeleton />
                    <RoomSkeleton />
                    <RoomSkeleton />
                    <RoomSkeleton />
                    <RoomSkeleton />
                    <RoomSkeleton />
                    <RoomSkeleton />
                    <RoomSkeleton />
                    <RoomSkeleton />
                    <RoomSkeleton />
                    <RoomSkeleton />
                    <RoomSkeleton />
                </>
            ) : null}
            {data?.map((room) => (
                <Room
                    // imageUrl={room.photos[0].file}
                    key={room.pk}
                    pk={room.pk}
                    name={room.name}
                    rating={room.rating}
                    city={room.city}
                    country={room.country}
                    price={room.price}
                />
            ))}
        </Grid>
    );
}