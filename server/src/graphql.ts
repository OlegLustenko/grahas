
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export class Coordinates {
    latitude: string;
    longitude: string;
}

export class UserInfo {
    gmt: string;
    date: string;
    time: string;
    city: string;
    coordinates?: Coordinates;
}

export class NatalChart {
    weight: string;
    answerText: string;
    rezult?: number;
}

export abstract class IQuery {
    abstract chart(user?: UserInfo): string | Promise<string>;
}
