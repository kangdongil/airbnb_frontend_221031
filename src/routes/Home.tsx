import { Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Room from "../components/Room";
import RoomSkeleton from "../components/RoomSkeleton";

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
    const [isLoading ,setIsLoading] = useState(true);
    const [rooms, setRooms] = useState<IRoom[]>([]);
    const fetchRooms = async () => {
        const response = await fetch("https://8000-kangdongil-airbnbbacken-yjav9794n4s.ws-us74.gitpod.io/api/v1/rooms/");
        const json = await response.json();
        setRooms(json.content);
        setIsLoading(false);
    };
    useEffect(() => {
        fetchRooms();
    }, []);
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
            {rooms.map((room) => (
                <Room
                    // imageUrl={room.photos[0].file}
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