import User from 'components/User/User'
import React, {useState } from 'react'
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import { motion } from "framer-motion";
import { ICard } from 'types/card.type';
import { 
    Container, 
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
 import {
    USER_ANIMATION_1,
    USER_ANIMATION_2,
    USER_ANIMATION_3,
    FIRST_BOT_ANIMATION_1,
    FIRST_BOT_ANIMATION_2,
    FIRST_BOT_ANIMATION_3,
    SECOND_BOT_ANIMATION_1,
    SECOND_BOT_ANIMATION_2,
    SECOND_BOT_ANIMATION_3,
    THIRD_BOT_ANIMATION_1,
    THIRD_BOT_ANIMATION_2,
    THIRD_BOT_ANIMATION_3,
    PROGRESS_ANIMATION,
    finishCard,
    finishCardTop,
    finishMoney,
    finishMoneyRight,
    finishMoneyTop,
    popUpWinner
 } from 'utils/animation';
import Card from 'components/Card/Card';
import { IUserData } from 'types/user.type';
import getCard from 'utils/getCard';
import totalScore from 'utils/caculateScore';
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
    const timeToFlipCard: number = 7000
    const cardList: ICard[] = []
    while(cardList.length < 12) {
        getCard(cardList)
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
        card: bot1Card,
        score: scoreBot1,
        name: "bot1",
        avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        money: 5000,
        typeUser: 'bot'
    }

    const botInfo2: IUserData = {
        id:' bot2',
        card: bot2Card,
        score: scoreBot2,
        name: "bot2",
        avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        money: 5000,
        typeUser: 'bot'
    }

    const botInfo3: IUserData = {
        id:' bot3',
        card: bot3Card,
        score: scoreBot3,
        name: "bot3",
        avatar:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        money: 5000,
        typeUser: 'bot'
    }
    const userArr: IUserData[] = [userInfo, botInfo1, botInfo2, botInfo3]
    const [winnerList, setWinnerList] = useState<IUserData[]>([userArr[0]])
    return (
        <Container>
            <NotificationWinner
            variants = {popUpWinner}
            animate={!isFlipCard.isFlipCardBot ? "initial" : "end"}
            >
                {winnerList[0]?.name} win
            </NotificationWinner>
            <ProgressBar
                variants= {PROGRESS_ANIMATION}
                animate={!isStart ? "initial" : "end"}
            />
            <WrapperUser>
                <User
                data = {userArr[0]}           
                />
                <PopupWinner
                variants= {finishCard}
                animate={!isFlipCard.isFlipCardBot ? "initial" : "end"}              
                >
                    {userArr[0].score} Điểm
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
                data = {userArr[1]}           
                />
                <PopupWinner 
                variants= {finishCard}
                animate={!isFlipCard.isFlipCardBot ? "initial" : "end"}
                flipcard = {isFlipCard.isFlipCardBot}
                >
                    {userArr[1].score} Điểm
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
                <User  data = {userArr[2]} flex = 'row'/>
                <PopupWinnerTop 
                flipcard = {isFlipCard.isFlipCardBot}
                variants= {finishCardTop}
                animate={!isFlipCard.isFlipCardBot ? "initial" : "end"}
                >
                    {userArr[2].score} Điểm
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
                <User data = {userArr[3]} />
                <PopupWinner 
                flipcard = {isFlipCard.isFlipCardBot}
                variants= {finishCard}
                animate={!isFlipCard.isFlipCardBot ? "initial" : "end"}
                >
                    {userArr[3].score} Điểm
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
            initial = {{
                x: 'calc(-50% + 3px)',
                y: 'calc(-50% + 3px)'
            }}
            />
            <MotionCard 
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
            />   
            {userArr[0]?.card.map((card: ICard, index: number) => {
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
            {userArr[1]?.card.map((card: ICard, index: number) => {
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
            {userArr[2]?.card.map((card: ICard, index: number) => {
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
            {userArr[3]?.card.map((card: ICard, index: number) => {
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