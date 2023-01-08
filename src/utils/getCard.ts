import { ICard } from "types/card.type"
const getRandomCard = (max: number, min: number): number => {
    const random: number = Math.floor(Math.random() * (max - min + 1)) + min
    return random
}
const getCard = (cardList: ICard[]) => {
    const suitList: string[] = ["clubs", "diamonds", "hearts", "spades"]
    const value: number = getRandomCard(10,1)
    const suitIndex: number = getRandomCard(3,0)
    const newCard: ICard = {
        value,
        suit: suitList[suitIndex]
    } 
    const includeCard = cardList.find((item) => {
        return newCard.value === item.value && newCard.suit === item.suit
    })
    if(includeCard)
        return
    cardList.push(newCard)
}

export default getCard