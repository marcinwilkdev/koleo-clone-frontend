import { ISavedCity } from "./city";

export interface ISavedConnection {
    id: string;
    cities: {
        city: ISavedCity;
        date: Date;
        price: number;
    }[];
    trainType: string;
}