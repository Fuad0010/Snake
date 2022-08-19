import { getInputDirection } from "./assets/input.js";

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

export function draw(gameBoard){
    snakeBody.forEach(segment => {

        const snakeHeadImg = document.createElement('img');
          snakeHeadImg.src = "/assets/img/snakeHead.png";
        
        const snakeElement = document.createElement('img');
        snakeElement.src = "/assets/img/snakeBody.png";

        snakeElement.style.gridRowStart = segment.x;
        snakeElement.style.gridColumnStart = segment.y;
        
        snakeHeadImg.style.gridRowStart = segment.x;
        snakeHeadImg.style.gridColumnStart = segment.y;
        
        snakeElement.classList.add('snake');
        snakeHeadImg.classList.add('snakeHeadImg');
        
        gameBoard.appendChild(snakeElement);
        gameBoard.appendChild(snakeHeadImg);

        
    })
}