import {ICharacter} from "./ICharacter";

export interface IResponse {
    info:{
        count: number,
        pages: number,
        next: string | null
        prev: string | null
    }
    results: ICharacter[]
}