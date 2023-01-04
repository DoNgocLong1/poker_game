import styled from "styled-components";
import images from "assets/image";

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
    z-index: 99;

`
export const WrapperUser = styled(Wrapper)`
    bottom: 2em;
    left: 2em;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const WrapperActive = styled(Wrapper)`
    bottom: 1.5em;
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


export const PopupWinner = styled.div`
    position: absolute;
    color: white;
    font-weight: bold;
    font-size: 3rem;
    top: 50%;
    transform: translateY(-150px);
    white-space: nowrap;
    text-shadow: rgb(64, 116, 181) 2px 2px 0px, rgb(64, 116, 181) 2px -2px 0px, rgb(64, 116, 181) -2px 2px 0px, rgb(64, 116, 181) -2px -2px 0px, rgb(64, 116, 181) 2px 0px 0px, rgb(64, 116, 181) 0px 2px 0px, rgb(64, 116, 181) -2px 0px 0px, rgb(64, 116, 181) 0px -2px 0px;
`

export const PopupMoney = styled(PopupWinner)`
    transform: translate(80px, -50%);
`
    
