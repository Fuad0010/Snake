// import { getInputDirection } from "./assets/input.js";

export const SNAKE_SPEED = 7;
const snakeBody = [
    { x: 11, y: 11 }
]   
let newSegments = 0;

const snakeHead = [
    { x: 11, y: 11 }
]
const snakeTail = [
    { x: 12, y: 11 }
]

export function update(){
    addSegments()
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

    for (let i = snakeTail.length - 2; i >= 0; i--){
        snakeTail[i + 1] = { ...snakeTail[i]}
    }
    snakeTail[0].x += inputDirection.x;
    snakeTail[0].y += inputDirection.y;
}

    const snakeHeadImg = document.createElement('img');
    snakeHeadImg.src = "/assets/img/snakeHead.png";


    
export function draw(gameBoard){
    snakeBody.forEach(segment => {
        
        
        
        const snakeElement = document.createElement('img');
        snakeElement.src = "/assets/img/snakeBody.png";
        
        snakeElement.style.gridRowStart = segment.x;
        snakeElement.style.gridColumnStart = segment.y;
        
        
        snakeElement.classList.add('snake');
        
        gameBoard.appendChild(snakeElement);

        
    })
    snakeTail.forEach(segment => {
        
        
        
        const snakeTail = document.createElement('img');
        snakeTail.src = "/assets/img/snakeTail.png";
        
        snakeTail.style.gridRowStart = segment.x;
        snakeTail.style.gridColumnStart = segment.y;
        
        
        snakeTail.classList.add('snake');
        
        gameBoard.appendChild(snakeTail);

        
    })
    snakeHead.forEach(segment => {

        
        
        
        
        snakeHeadImg.style.gridRowStart = segment.x;
        snakeHeadImg.style.gridColumnStart = segment.y;
        
        snakeHeadImg.classList.add('snakeHeadImg');
        
        gameBoard.appendChild(snakeHeadImg);

        
    })
}



let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0};

window.addEventListener('keydown',e =>{
    switch (e.key){
        case 'ArrowLeft':
            if(lastInputDirection.y !== 0) break
            inputDirection = {x: 0, y: -1}
            snakeHeadImg.style.transform = "rotate(-90deg)";
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

export function expandSnake(amount){
    newSegments += amount
}

export function onSnake(position){
    return snakeHead.some(segment => {
        return equalPositions(segment, position)
    })
}

function equalPositions(pos1, pos2){
    return (
        pos1.x === pos2.x && pos1.y === pos2.y
    )
}

function addSegments(){
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length -1]}) 
    }
    newSegments = 0;
}