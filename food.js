import { randomGridPosition } from './grid.js'
import { onSnake, expandSnake} from './snake.js'

let food = getRandomFoodPosition();
const EXPANSION_RATE = 1;
console.log(EXPANSION_RATE)
export function update(){
  if(onSnake(food)){
    expandSnake(EXPANSION_RATE)
    food = getRandomFoodPosition();
  }
    
}
    
export function draw(gameBoard){
    const redApple = document.createElement('img');
    redApple.src = "/assets/img/redApple.png";
    redApple.style.gridRowStart = food.x;
    redApple.style.gridColumnStart = food.y;
    redApple.classList.add('redAppleImg');
    gameBoard.appendChild(redApple);
}

function getRandomFoodPosition(){
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition;
}