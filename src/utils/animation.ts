const initAnimation = { x: '-50%', y: '-50%', opacity: 1 }
export const USER_ANIMATION_1 = {
    initial: initAnimation,
    end: { x: 'calc(-50% - 110px)', y: 'calc(-50% + 200px)', 
    transition: { duration: 1, delay: 0.25 } },
    }
export const USER_ANIMATION_2 = {
    initial: initAnimation,
    end: { x: '-50%', y: 'calc(-50% + 200px)',
    transition: { duration: 1, delay: 0.5 } },
}
export const USER_ANIMATION_3 = {
    initial: initAnimation,
    end: { x: 'calc(-50% + 110px)', y: 'calc(-50% + 200px)', 
    transition: { duration: 1, delay: 0.75 } },
}
export const FIRST_BOT_ANIMATION_1 = {
    initial: initAnimation,
    end: { x: 'calc(-50% - 500px)', y: '-50%', 
    transition: { duration: 1, delay: 1.25 } },
}
export const FIRST_BOT_ANIMATION_2 = {
    initial: initAnimation,
    end: { x: 'calc(-50% - 390px)', y: '-50%', 
    transition: { duration: 1, delay: 1.5 } },
}
export const FIRST_BOT_ANIMATION_3 = {
    initial: initAnimation,
    end: { x: 'calc(-50% - 280px)', y: '-50%', 
    transition: { duration: 1, delay: 1.75 } },
}
export const SECOND_BOT_ANIMATION_1 = {
    initial: initAnimation,
    end: { x: 'calc(-50% - 110px)', y: 'calc(-50% - 200px)', 
    transition: { duration: 1, delay: 2 } },
}
export const SECOND_BOT_ANIMATION_2 = {
    initial: initAnimation,
    end: { x: '-50%', y: 'calc(-50% - 200px)', 
    transition: { duration: 1, delay: 2.25 } },
}
export const SECOND_BOT_ANIMATION_3 = {
    initial: initAnimation,
    end: { x: 'calc(-50% + 110px)', y: 'calc(-50% - 200px)', 
    transition: { duration: 1, delay: 2.75 } },
}
export const THIRD_BOT_ANIMATION_1 = {
    initial: initAnimation,
    end: { x: 'calc(-50% + 500px)', y: '-50%', 
    transition: { duration: 1, delay: 3 } },
}
export const THIRD_BOT_ANIMATION_2 = {
    initial: initAnimation,
    end: {x: 'calc(-50% + 390px)', y: '-50%', 
    transition: { duration: 1, delay: 3.25 } },
}
export const THIRD_BOT_ANIMATION_3 = {
    initial: initAnimation,
    end: {x: 'calc(-50% + 280px)', y: '-50%', 
    transition: { duration: 1, delay: 3.5} },
}
export const PROGRESS_ANIMATION = {
    initial: {width: '100%'},
    end: {width: '0', 
    transition: { duration: 4, delay: 4}}
}
const timeFinish: number = 1
export const finishCard = {
    initial: { y: -150, opacity: 0},
    end: { y: -120, opacity: 1,
    transition: { duration: timeFinish}}
}
export const finishCardTop = {
    initial: {x: -150, y: 'calc(-50% + 30px)', opacity: 0},
    end: { x: -150,y: '-50%', opacity: 1,
    transition: { duration: timeFinish}}
}
export const finishMoney = {
    initial: {x: 80, y: 'calc(-50% + 30px)',opacity: 0},
    end: {x: 80, y: '-50%', opacity: 1,
    transition: { duration: timeFinish}}
}
export const finishMoneyRight = {
    initial: {x: -80, y: 'calc(-50% + 30px)',opacity: 0},
    end: {x: -80, y: '-50%', opacity: 1,
    transition: { duration: timeFinish}}
}
export const finishMoneyTop = {
    initial: {x: 150, y: 'calc(-50% + 30px)',opacity: 0},
    end: {x: 150, y: '-50%',opacity: 1,
    transition: { duration: timeFinish}}
}
export const popUpWinner = {
    initial: {x: 'calc(-50% + 30px)', y: 'calc(-50% + 30px)',opacity: 0},
    end: {x: '-50%', y: '-50%',opacity: 1,
    transition: { duration: timeFinish}}
}