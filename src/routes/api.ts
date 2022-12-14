import { QueryFunctionContext } from "@tanstack/react-query";
import axios from "axios";

const instance = axios.create({
    baseURL: "https://8000-kangdongil-airbnbbacken-yjav9794n4s.ws-us74.gitpod.io/api/v1/"
})

// export const getRooms = () => instance.get("rooms/").then((response) => response.data.content);

export async function getRooms() {
    const response = await instance.get(`rooms/`);
    return response.data.content;
};

export const getRoom = ({ queryKey }: QueryFunctionContext) => {
    const [_, roomPk] = queryKey;
    return instance.get(`rooms/${roomPk}`).then((response) => response.data);
};