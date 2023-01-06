import User from 'components/User/User'
import React, {useState } from 'react'
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import { motion } from "framer-motion";
import { ICard } from 'types/card.type';
import { Container, 
    WrapperUser,
    WrapperActive,
    WrapperBot1,
    WrapperBot2,
    WrapperBot3,
    PopupWinner,
    PopupWinnerTop,
    PopupMoney,
    PopupMoneyRight,
    PopupMoneyTop,
    ProgressBar,
    NotificationWinner
 } from './MainTable.styled'
import Card from 'components/Card/Card';
import { IUserData } from 'types/user.type';
const MotionCard = motion(Card, { forwardMotionProps: true })
const CancelButton = styled(Button)`
    background-Color: #ee294f;
`
const PutButton = styled(Button)`
    background-Color: #26ad60;
`
const MainTable = () => {
    interface IFlipCard{
        isFlipCardUser: boolean,
        isFlipCardBot: boolean,
    }
    const [isStart, setIsStart] = useState<boolean>(false)
    const [isFlipCard, setIsFlipCard] = useState<IFlipCard>({
        isFlipCardUser: false,
        isFlipCardBot: false,
    })
    const [winnerName, setWinnerName] = useState<string>('')
    const timeToFlipCard: number = 7000

    const initAnimation = { x: '-50%', y: '-50%', opacity: 1 }
    const USER_ANIMATION_1 = {
        initial: initAnimation,
        end: { x: 'calc(-50% - 110px)', y: 'calc(-50% + 200px)', 
        transition: { duration: 1, delay: 0.25 } },
      }
    const USER_ANIMATION_2 = {
        initial: initAnimation,
        end: { x: '-50%', y: 'calc(-50% + 200px)',
        transition: { duration: 1, delay: 0.5 } },
    }
    const USER_ANIMATION_3 = {
        initial: initAnimation,
        end: { x: 'calc(-50% + 110px)', y: 'calc(-50% + 200px)', 
        transition: { duration: 1, delay: 0.75 } },
    }

    const FIRST_BOT_ANIMATION_1 = {
        initial: initAnimation,
        end: { x: 'calc(-50% - 500px)', y: '-50%', 
        transition: { duration: 1, delay: 1.25 } },
    }
    const FIRST_BOT_ANIMATION_2 = {
        initial: initAnimation,
        end: { x: 'calc(-50% - 390px)', y: '-50%', 
        transition: { duration: 1, delay: 1.5 } },
    }
    const FIRST_BOT_ANIMATION_3 = {
        initial: initAnimation,
        end: { x: 'calc(-50% - 280px)', y: '-50%', 
        transition: { duration: 1, delay: 1.75 } },
    }


    
    const SECOND_BOT_ANIMATION_1 = {
        initial: initAnimation,
        end: { x: 'calc(-50% - 110px)', y: 'calc(-50% - 200px)', 
        transition: { duration: 1, delay: 2 } },
    }
    const SECOND_BOT_ANIMATION_2 = {
        initial: initAnimation,
        end: { x: '-50%', y: 'calc(-50% - 200px)', 
        transition: { duration: 1, delay: 2.25 } },
    }
    const SECOND_BOT_ANIMATION_3 = {
        initial: initAnimation,
        end: { x: 'calc(-50% + 110px)', y: 'calc(-50% - 200px)', 
        transition: { duration: 1, delay: 2.75 } },
    }


    const THIRD_BOT_ANIMATION_1 = {
        initial: initAnimation,
        end: { x: 'calc(-50% + 500px)', y: '-50%', 
        transition: { duration: 1, delay: 3 } },
    }
    const THIRD_BOT_ANIMATION_2 = {
        initial: initAnimation,
        end: {x: 'calc(-50% + 390px)', y: '-50%', 
        transition: { duration: 1, delay: 3.25 } },
    }
    const THIRD_BOT_ANIMATION_3 = {
        initial: initAnimation,
        end: {x: 'calc(-50% + 280px)', y: '-50%', 
        transition: { duration: 1, delay: 3.5} },
    }

    const PROGRESS_ANIMATION = {
        initial: {width: '100%'},
        end: {width: '0', 
        transition: { duration: 4, delay: 4}}
    }
    const timeFinish: number = 1
    const finishCard = {
        initial: { y: -150, opacity: 0},
        end: { y: -120, opacity: 1,
        transition: { duration: timeFinish}}
    }
    const finishCardTop = {
        initial: {x: -150, y: 'calc(-50% + 30px)', opacity: 0},
        end: { x: -150,y: '-50%', opacity: 1,
        transition: { duration: timeFinish}}
    }

    const finishMoney = {
        initial: {x: 80, y: 'calc(-50% + 30px)',opacity: 0},
        end: {x: 80, y: '-50%', opacity: 1,
        transition: { duration: timeFinish}}
    }
    const finishMoneyRight = {
        initial: {x: -80, y: 'calc(-50% + 30px)',opacity: 0},
        end: {x: -80, y: '-50%', opacity: 1,
        transition: { duration: timeFinish}}
    }
    const finishMoneyTop = {
        initial: {x: 150, y: 'calc(-50% + 30px)',opacity: 0},
        end: {x: 150, y: '-50%',opacity: 1,
        transition: { duration: timeFinish}}
    }
    const popUpWinner = {
        initial: {x: 'calc(-50% + 30px)', y: 'calc(-50% + 30px)',opacity: 0},
        end: {x: '-50%', y: '-50%',opacity: 1,
        transition: { duration: timeFinish}}
    }
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
 

    const cardList: ICard[] = []
    const getRandomCard = (max: number, min: number): number => {
        const random: number = Math.floor(Math.random() * (max - min + 1)) + min
        return random
    }
    const getCard = () => {
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
    while(cardList.length < 12) {
        getCard()
    }

    const userCard: ICard[] = cardList.slice(0,3)
    const scoreUser = totalScore(userCard)
    const bot1Card: ICard[] = cardList.slice(3,6)
    const scoreBot1 = totalScore(bot1Card)
    const bot2Card: ICard[] = cardList.slice(6,9)
    const scoreBot2 = totalScore(bot2Card)
    const bot3Card: ICard[] = cardList.slice(9)
    const scoreBot3 = totalScore(bot3Card)
    const userInfo: IUserData = {
        id:' user',
        card: userCard,
        score: scoreUser,
        name: "long",
        avatar: 'https://cdn3.vectorstock.com/i/1000x1000/38/42/hacker-character-avatar-icon-vector-11573842.jpg',
        money: 5000,
        typeUser: 'user'
    }

    const botInfo1: IUserData = {
        id:' bot1',
        card: [],
        score: scoreBot1,
        name: "bot1",
        avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        money: 5000,
        typeUser: 'bot'
    }

    const botInfo2: IUserData = {
        id:' bot2',
        card: [],
        score: scoreBot2,
        name: "bot2",
        avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        money: 5000,
        typeUser: 'bot'
    }

    const botInfo3: IUserData = {
        id:' bot3',
        card: [],
        score: scoreBot3,
        name: "bot3",
        avatar:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        money: 5000,
        typeUser: 'bot'
    }
    const userArr : IUserData[] = [userInfo ,botInfo1, botInfo2, botInfo3]
    const handleCaculateMoney = (winner: IUserData): void => {
        const addMoney = userArr.filter((item: IUserData) => {
            return item.id === winner.id
        })
    }
    const findWInner = (): void => {
        let winner: IUserData = userInfo
        userArr.forEach((item: IUserData) => {
            if(item.score > winner.score){
                winner = item
            }
        })
        setWinnerName(winner.name)
        /* _listUser = _listUser.map((user) =>
      idsWinners.includes(user.id)
        ? { ...user, money: (user.money += (bets * 3) / arrayWinners.length) }
        : { ...user, money: (user.money -= bets) }
    ); */
    }
    console.log(userInfo.money)
    console.log('rhjrtjhrtjrt')
    return (
        <Container>
            {/* <Overlay/> */}
            <NotificationWinner
            variants = {popUpWinner}
            animate={!isFlipCard.isFlipCardBot ? "initial" : "end"}
            >
                {winnerName} win
            </NotificationWinner>
            <ProgressBar
                variants= {PROGRESS_ANIMATION}
                animate={!isStart ? "initial" : "end"}
            />
            <WrapperUser>
                <User
                data = {userInfo}           
                />
                <PopupWinner
                variants= {finishCard}
                animate={!isFlipCard.isFlipCardBot ? "initial" : "end"}
                
                >
                    {scoreUser} Điểm
                </PopupWinner>
                <PopupMoney 
                variants= {finishMoney}
                animate={!isFlipCard.isFlipCardBot ? "initial" : "end"}
                >
                    +300
                </PopupMoney>
            </WrapperUser>
            <WrapperActive>
                <PutButton 
                variant="contained" color="success"
                onClick={()=> {
                    setTimeout(() => {
                        setIsFlipCard({
                            isFlipCardUser: true,
                            isFlipCardBot: true,
                        })
                        findWInner()
                    }, timeToFlipCard + 1000)
                    setIsStart(true)
                }}
                >
                Phát bài
                </PutButton>
                
                <CancelButton 
                variant="contained" color="error"
                onClick={() => {
                    setIsStart(false)
                    setIsFlipCard({
                        isFlipCardUser: false,
                        isFlipCardBot: false,
                    })
                }}
                >
                Tiếp tục
                </CancelButton>
            </WrapperActive>
            <WrapperBot1>
                <User 
                data = {botInfo1}           
                />
                <PopupWinner 
                variants= {finishCard}
                animate={!isFlipCard.isFlipCardBot ? "initial" : "end"}
                flipcard = {isFlipCard.isFlipCardBot}
                >
                    {scoreBot1} Điểm
                </PopupWinner>
                <PopupMoney 
                flipcard = {isFlipCard.isFlipCardBot}
                variants= {finishMoney}
                animate={!isFlipCard.isFlipCardBot ? "initial" : "end"}
                >
                    -100
                </PopupMoney>
            </WrapperBot1>

            <WrapperBot2>
                <User  data = {botInfo2} flex = 'row'/>
                <PopupWinnerTop 
                flipcard = {isFlipCard.isFlipCardBot}
                variants= {finishCardTop}
                animate={!isFlipCard.isFlipCardBot ? "initial" : "end"}
                >
                    {scoreBot2} Điểm
                </PopupWinnerTop>
                <PopupMoneyTop 
                flipcard = {isFlipCard.isFlipCardBot}
                variants= {finishMoneyTop}
                animate={!isFlipCard.isFlipCardBot ? "initial" : "end"}
                >
                    -100
                </PopupMoneyTop>
            </WrapperBot2>

            <WrapperBot3>
                <User data = {botInfo3} />
                <PopupWinner 
                flipcard = {isFlipCard.isFlipCardBot}
                variants= {finishCard}
                animate={!isFlipCard.isFlipCardBot ? "initial" : "end"}
                >
                    {scoreBot3} Điểm
                </PopupWinner>
                <PopupMoneyRight 
                flipcard = {isFlipCard.isFlipCardBot}
                variants= {finishMoneyRight}
                animate={!isFlipCard.isFlipCardBot ? "initial" : "end"}
                >
                    -100
                </PopupMoneyRight>
            </WrapperBot3>
            <MotionCard 
            belongTo='master'
                initial = {{
                x: 'calc(-50% + 3px)',
                y: 'calc(-50% + 3px)'
            }}
            />
            <MotionCard 
            belongTo='master'
            initial = {{
                x: '-50%',
                y: '-50%'
            }}
            />
            <MotionCard 
            initial = {{
                x: 'calc(-50% - 3px)',
                y: 'calc(-50% - 3px)'
            }}
            belongTo='master'
            />   
            {userCard.map((card, index) => {
                const variant = index === 1 ? USER_ANIMATION_1 : index === 2 ?
                USER_ANIMATION_2 : USER_ANIMATION_3
                return (
                    <MotionCard 
                    key = {index}
                    belongTo='user'
                    isFlip = {isFlipCard.isFlipCardUser}
                    variants= {variant}
                    animate={!isStart ? "initial" : "end"}
                    card = {card}
                    />
                )})
            }
            {bot1Card.map((card, index) => {
                const variant = index === 1 ? FIRST_BOT_ANIMATION_1 : index === 2 ?
                FIRST_BOT_ANIMATION_2 : FIRST_BOT_ANIMATION_3
                return (
                    <MotionCard 
                    key = {index}
                    belongTo='bot1'
                    isFlip = {isFlipCard.isFlipCardBot}
                    variants= {variant}
                    animate={!isStart ? "initial" : "end"}
                    card = {card}
                    />
                )})
            }
            {bot2Card.map((card, index) => {
                const variant = index === 1 ? SECOND_BOT_ANIMATION_1 : index === 2 ?
                SECOND_BOT_ANIMATION_2 : SECOND_BOT_ANIMATION_3
                return (
                    <MotionCard 
                    key = {index}
                    belongTo='bot2'
                    isFlip = {isFlipCard.isFlipCardBot}
                    variants= {variant}
                    animate={!isStart ? "initial" : "end"}
                    card = {card}
                    />
                )})
            }
            {bot3Card.map((card, index) => {
                const variant = index === 1 ? THIRD_BOT_ANIMATION_1 : index === 2 ?
                THIRD_BOT_ANIMATION_2 : THIRD_BOT_ANIMATION_3
                return (
                    <MotionCard 
                    key = {index}
                    belongTo='bot3'
                    isFlip = {isFlipCard.isFlipCardBot}
                    variants= {variant}
                    animate={!isStart ? "initial" : "end"}
                    card = {card}
                    />
                )})
            }
        </Container>
  )
}

export default MainTable