
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export class CoordinatesInput {
    latitude: string;
    longitude: string;
}

export class UserInfoInput {
    gmt: string;
    date: string;
    time: string;
    city: string;
    coordinates?: CoordinatesInput;
}

export class Coordinates {
    latitude: string;
    longitude: string;
}

export class NatalChart {
    weight: string;
    answerText: string;
    rezult?: number;
}

export abstract class IQuery {
    abstract chart(user?: UserInfoInput): string | Promise<string>;
}

export class UserInfo {
    gmt: string;
    date: string;
    time: string;
    city: string;
    coordinates?: Coordinates;
}
