import { ISavedCity } from "./city";

export interface ISavedConnection {
    id: string;
    cities: {
        city: ISavedCity;
        date: Date;
    }[];
    trainType: string;
    dateString: string;
}