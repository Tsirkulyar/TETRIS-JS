import { Game} from "./modules/game.js"
import {View} from "./modules/view.js"
import { Controller } from "./modules/controller.js";
//  .js обязательно необходимо дописывать; импорт не будет работать 
// т.к. не прописан type="module" в html файле

const game = new Game();
const view = new View(document.querySelector('.container'))
const controller = new Controller(game, view);
// передаем в переменную game класс Game()
// console.log(game)
// game.createTetromino()
// console.log(game)

// game.createTetromino();

export const SIZE_BLOCK = 30;
export const COLUMNS = 10;
export const ROWS = 20;

// console.log(document)

controller.init('Enter')

// механика игры
// const game = {
//     area: [
//         ['o','o','o','o','o','o','o','o','o','o'],
//         ['o','o','o','o','o','o','o','o','o','o'],
//         ['o','o','o','o','o','o','o','o','o','o'],      
//         ['o','o','o','o','o','o','o','o','o','o'],
//         ['o','o','o','o','o','o','o','o','o','o'],
//         ['o','o','o','o','o','o','o','o','o','o'],
//         ['o','o','o','o','o','o','o','o','o','o'],
//         ['o','o','o','o','o','o','o','o','o','o'],
//         ['o','o','o','o','o','o','o','o','o','o'],
//         ['o','o','o','o','o','o','o','o','o','o'],
//         ['o','o','o','o','x','o','o','o','o','o'],
//         ['o','o','o','o','o','o','o','o','o','o'],
//         ['o','o','o','o','o','o','o','o','o','o'],
//         ['o','o','o','o','o','o','o','o','o','o'],
//         ['o','o','o','o','o','o','o','o','o','o'],
//         ['o','o','o','o','o','o','o','o','o','o'],
//         ['o','o','o','o','o','o','o','o','o','o'],
//         ['o','o','o','o','o','o','o','o','x','x'],
//         ['o','o','o','o','x','x','o','o','x','o'],
//         ['o','o','o','o','x','x','o','o','x','o'],
//     ],

//     activeTetromino: {
//         x:3,
//         y:0,
//         block: [
//             ['o', 'x', 'o'],
//             ['o', 'x', 'o'],
//             ['x', 'x', 'o']
//         ],
//         rotationIndex: 0,
//         rotation: [
//             [
//                 ['o', 'x', 'o'],
//                 ['o', 'x', 'o'],
//                 ['x', 'x', 'o']
//             ],
//             [
//                 ['x', 'o', 'o'],
//                 ['x', 'x', 'x'],
//                 ['o', 'o', 'o']
//             ],
//             [
//                 ['o', 'x', 'x'],
//                 ['o', 'x', 'o'],
//                 ['o', 'x', 'o']
//             ],
//             [
//                 ['o', 'o', 'o'],
//                 ['x', 'x', 'x'],
//                 ['o', 'o', 'x']
//             ],
//         ]
//     },

//     moveLeft(){
//         if (this.checkOutPosition(this.activeTetromino.x -1, this.activeTetromino.y)){
//             this.activeTetromino.x -= 1;
//         }
//     },
//     moveRight(){
//         if (this.checkOutPosition(this.activeTetromino.x +1, this.activeTetromino.y)){
//             this.activeTetromino.x += 1;
//         }
//     },
//     moveDown(){
//         if (this.checkOutPosition(this.activeTetromino.x, this.activeTetromino.y +1)){
//             this.activeTetromino.y += 1;
//         }else{
//             this.stopMove();
//         }
//     },
//     rotateTetromino(){
//         this.activeTetromino.rotationIndex = 
//         this.activeTetromino.rotationIndex < 3 ? 
//          this.activeTetromino.rotationIndex + 1 : 0;
    
//          this.activeTetromino.block = 
//          this.activeTetromino.rotation[this.activeTetromino.rotationIndex]

//          if (!this.checkOutPosition(this.activeTetromino.x, this.activeTetromino.y)){
//             this.activeTetromino.rotationIndex = 
//             this.activeTetromino.rotationIndex > 0 ? 
//              this.activeTetromino.rotationIndex - 1 : 3;
        
//              this.activeTetromino.block = 
//              this.activeTetromino.rotation[this.activeTetromino.rotationIndex]
//          }
//     },

//     get vievArea(){
//         const area = JSON.parse(JSON.stringify(this.area));
//         // стрингифай превращает в строчку а парс превращает обратно
//         const {x, y, block:tetromino} = this.activeTetromino
    
//         for(let i = 0; i < tetromino.length; i++){
//             const row = tetromino[i];
//             for (let j = 0; j < tetromino.length; j++){
//                 if (row[j] === 'x') {
//                     area[y+i][x+j] =  tetromino[i][j]
//                 }
//             }
//         }
//         return area
// },
// checkOutPosition(x,y){
//     const tetromino = this.activeTetromino.block;
//     for(let i = 0; i < tetromino.length; i++){
//         for (let j = 0; j < tetromino[i].length; j++){
//                 if (tetromino[i][j] === 'o') continue

//                 if(!this.area[y + i] || !this.area[y + i][x + j] ||
//                     this.area[y + i][x + j] === 'x'){
//                     return false
//                 }
//         }
// }
// return true
// },
// stopMove(){
//     const {x, y, block: tetromino} = this.activeTetromino;

//     for(let i = 0; i < tetromino.length; i++){
//         const row = tetromino[i];
//         for (let j = 0; j < tetromino.length; j++){
//             if (row[j] === 'x') {
//                 this.area[y+i][x+j] =  tetromino[i][j]
//             }
//         }
//     }
// }
// }
// game.vievArea()




// const colors = {
//     J: 'FireBrick',
//     I: 'CadeBlue',
//     O: 'Gold',
//     L: 'SlateBlue',
//     2: 'RoyalBlue',
//     T: 'Indigo',
//     S: 'MediumSeaGreen'
// }


// const canvas = document.createElement('canvas');
// canvas.classList.add('game-area')
// container.append(canvas);
// canvas.width = SIZE_BLOCK * COLUMNS;
// canvas.height = SIZE_BLOCK * ROWS;

// const context = canvas.getContext('2d')
// //контекст отрисовывает через методы

// const showArea = (area)=> {
//     context.clearRect(0, 0, canvas.width, canvas.height)
//     // подчищает след
//     for(let y =0; y < area.length; y++){
//         const line = area[y];
//         for (let x = 0; x < line.length; x++){
//             const block = line[x];
//             if(block !== 'o'){
//                 // console.log(game.area)
//                 context.fillStyle = colors[block];
//                 context.strokeStyle = 'white';
//                 context.fillRect(x * SIZE_BLOCK, y * SIZE_BLOCK, SIZE_BLOCK, SIZE_BLOCK);
//                 context.strokeRect(x * SIZE_BLOCK, y * SIZE_BLOCK, SIZE_BLOCK, SIZE_BLOCK);
//             }
//         }
//     }
// }

// window.addEventListener('keydown', event =>{
//     const key = event.code;
//     switch (key){
//         case 'ArrowLeft':
//             game.moveLeft()
//             view.showArea(game.vievArea)
//         break;
//         case 'ArrowRight':
//             game.moveRight()
//             view.showArea(game.vievArea)
//         break;      
//         case 'ArrowDown':
//             game.moveDown();
//             view.showArea(game.vievArea)
//         break;
//         case 'ArrowUp':
//             game.rotateTetromino();
//             view.showArea(game.vievArea)
//         break;
//     }
// })

// view.init();
// view.showArea(game.vievArea);
