// import { getInputDirection } from "./assets/input.js";

export const SNAKE_SPEED = 2;
const snakeBody = [
    { x: 11, y: 11 }
]   
const snakeHead = [
    { x: 11, y: 11 }
]

export function update(){
    const inputDirection = getInputDirection();
    for (let i = snakeBody.length - 2; i >= 0; i--){
        snakeBody[i + 1] = { ...snakeBody[i]}
    }
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;

    for (let i = snakeHead.length - 2; i >= 0; i--){
        snakeHead[i + 1] = { ...snakeHead[i]}
    }
    snakeHead[0].x += inputDirection.x;
    snakeHead[0].y += inputDirection.y;
}

const snakeHeadDiv = document.createElement('div');

export function draw(gameBoard){
    snakeBody.forEach(segment => {
        
        
        
        const snakeElement = document.createElement('img');
        snakeElement.src = "/assets/img/snakeBody.png";
        
        snakeElement.style.gridRowStart = segment.x;
        snakeElement.style.gridColumnStart = segment.y;
        
        snakeHeadDiv.style.gridRowStart = segment.x;
        snakeHeadDiv.style.gridColumnStart = segment.y;
        
        snakeElement.classList.add('snake');
        snakeHeadDiv.classList.add('snakeHeadDiv');
        
        gameBoard.appendChild(snakeElement);
        gameBoard.appendChild(snakeHeadDiv);

        
    })
}

    const snakeHeadImg = document.createElement('img')
    snakeHeadImg.src = "/assets/img/snakeHead.png";
    snakeHeadDiv.classList.add('snakeHeadImg');
    snakeHeadDiv.appendChild(snakeHeadImg);



let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0};

window.addEventListener('keydown',e =>{
    switch (e.key){
        case 'ArrowLeft':
            if(lastInputDirection.y !== 0) break
            inputDirection = {x: 0, y: -1}
            snakeHeadImg.style.transform = "rotate(-90deg)";
            snakeHeadImg.style.height = "4.76vmin"
            snakeHeadImg.style.width = "4.76vmin"
            break
        case 'ArrowRight':
            if(lastInputDirection.y !== 0) break
            inputDirection = {x: 0, y: 1}
            snakeHeadImg.style.transform = "rotate(90deg)";
            break 
        case 'ArrowUp':
            if(lastInputDirection.x !== 0) break
            inputDirection = {x: -1, y: 0}
            snakeHeadImg.style.transform = "rotate(0deg)";
            break 
        case 'ArrowDown':
            if(lastInputDirection.x !== 0) break
            inputDirection = {x: 1, y: 0}
            snakeHeadImg.style.transform = "rotate(-180deg)";
            break 
    }
})

export function getInputDirection(){
    lastInputDirection = inputDirection;
    return inputDirection;
}
