import styled from "styled-components";
import images from "assets/image";
import { motion } from "framer-motion";
export const Container = styled.div`
  background-image: url(${images.board});
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  position: relative;
  button{
        width: 200px;
        height: 50px;
        font-size: 2em;
        padding: 0.5em 1em;
        color: #fff;
        font-weight: bold;
    }
    .MuiAvatar-root{
        border: 4px solid #fe8734; 
    }
`
export const Wrapper = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2em;
    z-index: 9;

`
export const WrapperUser = styled(Wrapper)`
    bottom: 2em;
    left: 2em;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const WrapperActive = styled(Wrapper)`
    bottom: 5em;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`


export const WrapperBot1 = styled(Wrapper)`
    top: 50%;
    left: 6em;
    transform: translateY(-50%);
`
export const WrapperBot2 = styled(Wrapper)`
    top: 1.5em;
    left: 50%;
    transform: translateX(-50%);
`

export const WrapperBot3 = styled(Wrapper)`
    top: 50%;
    right: 6em;
    transform: translateY(-50%);
`

export const PopupWinner = styled(motion.div)`
    position: absolute;
    color: white;
    font-weight: bold;
    font-size: 3rem;
    top: 50%;
    transform: translateY(-120px);
    white-space: nowrap;
    text-shadow: rgb(64, 116, 181) 2px 2px 0px, rgb(64, 116, 181) 2px -2px 0px, rgb(64, 116, 181) -2px 2px 0px, rgb(64, 116, 181) -2px -2px 0px, rgb(64, 116, 181) 2px 0px 0px, rgb(64, 116, 181) 0px 2px 0px, rgb(64, 116, 181) -2px 0px 0px, rgb(64, 116, 181) 0px -2px 0px;
`
export const PopupWinnerTop = styled(PopupWinner)`
    transform: translate(-150px, -50%);

`
export const PopupMoney = styled(PopupWinner)`
    transform: translate(80px, -50%);
`

export const PopupMoneyRight = styled(PopupWinner)`
    transform: translate(-80px, -50%);

`

export const PopupMoneyTop = styled(PopupWinner)`
    transform: translate(150px, -50%);

`

export const ProgressBar = styled(motion.span)`
    position: absolute;
    background-color: rgb(242, 178, 56);
    height: 1em;
    width: 100%;
    bottom: 0;
    left: 0;
    border-radius: 25px;
`

   
export const NotificationWinner = styled(PopupWinner)`
background-color: transparent;
    position: absolute;
    font-size: 5em;
    z-index: 99;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
`
