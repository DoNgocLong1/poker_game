import { ICard } from "./card.type";
export interface IUserData {
    id: string,
    card: ICard[],
    score: number,
    name: string,
    avatar: string,
    money: number,
    typeUser: string,
}
