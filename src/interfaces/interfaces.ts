export namespace Interfaces {
    export interface User {
        id?: number;
        login: string;
        password: string;
        email: string;
        isActivated?: boolean;
        role?: Enums.Roles;
        activationLink?: string;
        nickname?: string;
        rating?: number;
        about?: string | null;
        createdAt?: string;
        modifiedAt?: string;
        reviews?: Review[];
    }

    export interface Film {
        id?: number;
        name: string;
        country: Countries;
        author: string;
        averageRating?: number;
        description: string | null;
        createdAt?: string;
        modifiedAt?: string;
    }

    export interface Review {
        id?: number;
        authorId: number;
        filmId: number;
        content: string | null;
        score: number;
        karma?: number;
        createdAt?: string;
        modifiedAt?: string;
        isValidated?: boolean;
    }

    export enum Countries {
        RUS = "RUS",
        BEL = "BEL",
        ARM = "ARM",
        KAZ = "KAZ",
        UNK = "UNK",
    }

    export interface ActivationData {
        login: string;
        activationStatus: boolean;
        activationLink: string;
    }

    export interface UserRegistrationData {
        login: string,
        password: string,
        email: string
    }

    export type UserLoginData = Exclude<UserRegistrationData, "login">;

    export type AsyncState = {
        status: Enums.FetchStatus;
        error?: unknown;
    };

    export const ReviewColorsMapping: Record<string, string> = {
        "5": "purple",
        "4": "green",
        "3": "yellow",
        "2": "red",
        "1": "black"
    }
}

export namespace Enums {
    export enum FetchStatus {
        FETCHING = 'FETCHING',
        FETCHED = 'FETCHED',
        ERROR = 'ERROR',
        INITIAL = 'INITIAL',
    }

    export enum Roles {
        USER = "USER",
        ADMIN = "ADMIN",
        REVIEWER = "REVIEWER",
    }
}
