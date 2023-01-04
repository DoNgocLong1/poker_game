import User from 'components/User/User'
import React, { useEffect, useState } from 'react'
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
    PopupMoney
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
    const [isStart, setIsStart] = useState<boolean>(false)
    const [isFlipCard, setIsFlipCard] = useState<boolean>(false)
    useEffect(() => {
        setTimeout(() => {
            setIsStart(true)
        },1000)
        setTimeout(() => {
            setIsFlipCard(true)
        },7000)
    }, [])
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
        transition: { duration: 1, delay: 2.75 } },
    }
    const SECOND_BOT_ANIMATION_2 = {
        initial: initAnimation,
        end: { x: '-50%', y: 'calc(-50% - 200px)', 
        transition: { duration: 1, delay: 3 } },
    }
    const SECOND_BOT_ANIMATION_3 = {
        initial: initAnimation,
        end: { x: 'calc(-50% + 110px)', y: 'calc(-50% - 200px)', 
        transition: { duration: 1, delay: 3.25 } },
    }


    const THIRD_BOT_ANIMATION_1 = {
        initial: initAnimation,
        end: { x: 'calc(-50% + 500px)', y: '-50%', 
        transition: { duration: 1, delay: 2 } },
    }
    const THIRD_BOT_ANIMATION_2 = {
        initial: initAnimation,
        end: {x: 'calc(-50% + 390px)', y: '-50%', 
        transition: { duration: 1, delay: 2.25 } },
    }
    const THIRD_BOT_ANIMATION_3 = {
        initial: initAnimation,
        end: {x: 'calc(-50% + 280px)', y: '-50%', 
        transition: { duration: 1, delay: 2.5 } },
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
    const userCard: ICard[] = [
        {value: 6,suit: 'hearts'},
        {value: 3,suit: 'blades'},
        {value: 8,suit: 'clubs'}
    ]
    const scoreUser = totalScore(userCard)
    const bot1Card: ICard[] = [
        {value: 1,suit: 'hearts'},
        {value: 3,suit: 'clubs'},
        {value: 2,suit: 'diamonds'}
    ]
    const scoreBot1 = totalScore(bot1Card)
    const bot2Card: ICard[] = [
        {value: 4,suit: 'hearts'},
        {value: 7,suit: 'blades'},
        {value: 5,suit: 'diamonds'}
    ]
    const scoreBot2 = totalScore(bot2Card)
    const bot3Card: ICard[] = [
        {value: 8,suit: 'hearts'},
        {value: 4,suit: 'blades'},
        {value: 9,suit: 'diamonds'}
    ]
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
        name: "long",
        avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        money: 5000,
        typeUser: 'bot'
    }

    const botInfo2: IUserData = {
        id:' bot2',
        card: [],
        score: scoreBot2,
        name: "long",
        avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        money: 5000,
        typeUser: 'bot'
    }

    const botInfo3: IUserData = {
        id:' bot3',
        card: [],
        score: scoreBot3,
        name: "long",
        avatar:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        money: 5000,
        typeUser: 'bot'
    }
 
    return (
        <Container>
            <WrapperUser>
                <User
            
                data = {userInfo}           
                />
                <PopupWinner>
                    7 Điểm
                </PopupWinner>
                <PopupMoney>
                    -100
                </PopupMoney>
            </WrapperUser>
            <WrapperActive>
                <PutButton variant="contained" color="success">
                Cược
                </PutButton>
                
                <CancelButton variant="contained" color="error">
                Bỏ qua
                </CancelButton>
            </WrapperActive>
            <WrapperBot1>
                <User 
                name = 'Bot 1'
                />
                <PopupWinner>
                    7 Điểm
                </PopupWinner>
                <PopupMoney>
                    -100
                </PopupMoney>
            </WrapperBot1>

            <WrapperBot2>
                <User name = 'Bot2' flex = 'row'/>
            </WrapperBot2>

            <WrapperBot3>
                <User name = 'Bot3'/>
            </WrapperBot3>
            <MotionCard 
            belongTo='master
            isFlip = {isFlipCard}r'
            initial = {{
                x: 'calc(-50% + 3px)',
                y: 'calc(-50% + 3px)'
            }}
            />
            <MotionCard 
            belongTo='master
            isFlip = {isFlipCard}r'
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
            belongTo='master
            isFlip = {isFlipCard}r'
            />   
            {userCard.map((card, index) => {
                const variant = index === 1 ? USER_ANIMATION_1 : index === 2 ?
                USER_ANIMATION_2 : USER_ANIMATION_3
                return (
                    <MotionCard 
                    key = {index}
                    belongTo='user'
                    isFlip = {isFlipCard}
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
                    isFlip = {isFlipCard}
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
                    isFlip = {isFlipCard}
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
                    isFlip = {isFlipCard}
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