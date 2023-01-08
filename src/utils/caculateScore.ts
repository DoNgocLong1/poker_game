import { ICard } from "types/card.type"

const totalScore = (arr: ICard[]): number => {
    const score:number = arr.reduce((total: number, item: any)=> {
        return total += item.value
    },0)
    let result: number  = 0
    if(score <= 10) {
        return score
    }else{
        result = Number(score.toString()[1])
        if(result === 0 ){
            return 10
        }
    }
    return result 
}
export default totalScore